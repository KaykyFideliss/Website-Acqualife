#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>

// ==================== CONFIGURAÇÃO DA REDE ====================
const char* ssid = "Moto G73";
const char* password = "marcela23";
// ✅ CORREÇÃO: Use o IP correto do seu servidor
const char* serverURL = "http://10.209.126.128/site-acqualife/Acqualife-web/Api/salvar_dados.php";

// ==================== PINOS E CONSTANTES ====================
#define TRIG 4
#define ECHO 5
#define PH_PIN A0

const int ALTURA_POTE = 19;
const float ML_POR_CM = 440.0;

float vPh7 = 0.68;
float vPh4 = 0.50;
float slope, offset;

// ✅ ADICIONADO: MAC Address único do dispositivo
String macAddress = "";

// Controle de tempo
unsigned long ultimoEnvio = 0;
const unsigned long INTERVALO_ENVIO = 3000; // ⚡ 3 SEGUNDOS

// ==================== SETUP ====================
void setup() {
  Serial.begin(115200);
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);

  Serial.println();
  Serial.println("========================================");
  Serial.println("🌊 AQUALIFE - LEITURA RÁPIDA 3s");
  Serial.println("========================================");
  
  // ✅ ADICIONADO: Obter MAC Address
  macAddress = WiFi.macAddress();
  Serial.print("📟 MAC Address: ");
  Serial.println(macAddress);
  
  conectarWiFi();
  
  // Calibração do sensor de pH
  slope = 3.0 / (vPh7 - vPh4);
  offset = 7.0 - slope * vPh7;

  Serial.println("✅ Sistema inicializado - 3s entre leituras");
  ultimoEnvio = millis();
}

// ==================== CONEXÃO WiFi ====================
void conectarWiFi() {
  if (WiFi.status() == WL_CONNECTED) return;
  
  Serial.print("📶 Conectando WiFi: ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);
  
  int tentativas = 0;
  while (WiFi.status() != WL_CONNECTED && tentativas < 15) {
    delay(500);
    Serial.print(".");
    tentativas++;
  }

  Serial.println();
  if (WiFi.status() == WL_CONNECTED) {
    Serial.println("✅ WiFi conectado!");
    Serial.print("📡 IP: ");
    Serial.println(WiFi.localIP());
    
    // ✅ ATUALIZAR MAC se necessário
    if (macAddress == "") {
      macAddress = WiFi.macAddress();
    }
  } else {
    Serial.println("❌ Falha WiFi!");
  }
}

// ==================== LEITURA ULTRA-RÁPIDA DO pH ====================
float lerPH() {
  int soma = 0, validas = 0;
  
  // ⚡ LEITURA MUITO RÁPIDA - 5 leituras em 0.5 segundos
  for (int i = 0; i < 5; i++) {
    int leitura = analogRead(PH_PIN);
    if (leitura > 50 && leitura < 950) {
      soma += leitura;
      validas++;
    }
    delay(100);  // ⚡ 100ms entre leituras
  }
  
  if (validas == 0) return 7.0;
  float tensao = (soma / (float)validas / 1024.0);
  return constrain(slope * tensao + offset, 0, 14);
}

// ==================== ENVIO RÁPIDO DOS DADOS ====================
void enviarParaWeb(float ph, float volume) {
  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("❌ WiFi desconectado. Reconectando...");
    conectarWiFi();
    if (WiFi.status() != WL_CONNECTED) return;
  }

  HTTPClient http;
  WiFiClient client;
  
  // ✅ CORREÇÃO: Adicionar MAC address nos parâmetros
  String url = String(serverURL) + 
               "?ph=" + String(ph, 2) + 
               "&volume=" + String(volume, 0) + 
               "&mac=" + macAddress;

  Serial.println("📤 Enviando dados...");
  Serial.println("🔗 URL: " + url);

  http.begin(client, url);
  http.setTimeout(5000);  // ⚡ Timeout de 5 segundos
  
  int httpCode = http.GET();

  if (httpCode > 0) {
    String resposta = http.getString();
    Serial.print("✅ Resposta do servidor: ");
    Serial.println(resposta);
    
    // ✅ DEBUG: Verificar resposta
    if (resposta.indexOf("novo") > 0) {
      Serial.println("🎉 Novo dispositivo registrado!");
    } else if (resposta.indexOf("atualizados") > 0) {
      Serial.println("📡 Dados atualizados!");
    }
  } else {
    Serial.print("❌ HTTP Erro: ");
    Serial.println(httpCode);
    Serial.println("💡 Verifique: IP do servidor, rede WiFi, arquivo PHP");
  }
  
  http.end();
}

// ==================== MEDIÇÃO RÁPIDA DO NÍVEL ====================
float medirNivelAgua() {
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);

  long duracao = pulseIn(ECHO, HIGH, 20000); // Timeout 20ms
  if (duracao == 0) return 9.0;
  
  float distancia = duracao * 0.034 / 2;
  if (distancia < 2 || distancia > 40) return 9.0;
  
  return constrain(ALTURA_POTE - distancia, 0, ALTURA_POTE);
}

// ==================== LOOP PRINCIPAL - 3 SEGUNDOS ====================
void loop() {
  unsigned long tempoAtual = millis();
  
  // ⚡ Verificar se passaram 3 segundos
  if (tempoAtual - ultimoEnvio >= INTERVALO_ENVIO) {
    
    // Medição ultra-rápida
    float alturaAgua = medirNivelAgua();
    float volume = alturaAgua * ML_POR_CM;
    float phValue = lerPH();

    // Display rápido
    Serial.println("\n════════════════════════════════════════");
    Serial.printf("💧 Altura: %.1f cm\n", alturaAgua);
    Serial.printf("📊 Volume: %.0f ml\n", volume);
    Serial.printf("🧪 pH: %.2f\n", phValue);
    Serial.printf("📟 MAC: %s\n", macAddress.c_str());
    Serial.println("════════════════════════════════════════");

    // Envio rápido
    enviarParaWeb(phValue, volume);
    
    // Atualizar tempo
    ultimoEnvio = tempoAtual;
  }
  
  // Pequena pausa
  delay(100);
}


Adicionei o MAC Address único do dispositivo para identificação no servidor.
Corrigi o parâmetro de identificação do usuário na URL de requisição para usar 'id' em vez de 'id_user'. 
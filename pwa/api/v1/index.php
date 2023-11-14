<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
$api_key = '<API_KEY>';
function callOpenAI($text) {
    global $api_key;
    $data = [
        'model' => 'gpt-4-1106-preview',
        'messages' => [
            [
                'role' => 'system',
                'content' => 'Start Chat'
            ], 
            [
                'role' => 'user',
                'content' => $text
            ]
        ]
    ];
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://api.openai.com/v1/chat/completions');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $api_key
    ]);
    $response = curl_exec($ch);
    if(curl_errno($ch)){
        echo 'Curl error: ' . curl_error($ch);
    }
    curl_close($ch);
    return json_decode($response, true);
}
$textoRecebido = $_GET['texto'] ?? '';
if (!empty($textoRecebido)) {
    $response = callOpenAI("Agora você é um especialista da área jurídica. Um advogado experiente. Identifique objetivamente: a) a área do direito; b) se é caso de justiça gratuita e; c) liste todasa as teses necessárias para o sucesso da ação no caso: " . $textoRecebido . " ATENÇÃO! Não faça nenhuma recomendação, nenhum comentário explicativo ou conclusivo que seja adicional.");
    echo json_encode($response);
} else {
    echo json_encode(['error' => 'Nenhum texto fornecido']);
}
?>
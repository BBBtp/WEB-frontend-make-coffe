const target_tauri = true; // Установите true для сборки под Tauri

export const api_proxy_addr = "http://127.0.0.1:8000"; // Замените на IP вашего API
export const img_proxy_addr = "http://127.0.0.1:9000"; // Замените на IP вашего сервера изображений
export const dest_api = target_tauri ? api_proxy_addr : "/api";
export const dest_img = target_tauri ? img_proxy_addr : "/img-proxy";
export const dest_root = target_tauri ? "" : "/WEB-frontent-make-coffe";
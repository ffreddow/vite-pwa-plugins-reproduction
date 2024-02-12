mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn print_to_console(data: &wasm_bindgen::JsValue) {
    web_sys::console::log_1(data);
}

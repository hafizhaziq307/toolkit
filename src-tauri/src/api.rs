use image::DynamicImage;
use image::ImageFormat;
use dirs::download_dir;
use serde_json::{json, Value};

#[tauri::command(async)]
pub fn image_format_converter(path: String, convert_to: String, timestamp: String) -> Value{
    let img: DynamicImage = image::open(&path).expect("File not found!"); // decode image

    let format: ImageFormat = match convert_to.as_str() {
        "png" => ImageFormat::Png, 
        "jpg" => ImageFormat::Jpeg, 
        "webp" => ImageFormat::WebP, 
        "ico" => ImageFormat::Ico, 
        _ => ImageFormat::Png,
    };

    let into: String = download_dir().unwrap().to_string_lossy().to_string() + r"\" + &timestamp + "." + &convert_to;

    img.save_with_format(&into, format).unwrap();

    return json!({
        "path": &into,
    });
}

// how to add backslash to string
// r"\output.png"
// "\\output.png"
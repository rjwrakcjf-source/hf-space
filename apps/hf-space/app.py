import gradio as gr
import os
from api.inference import run_inference
from api.models import list_models

def predict(prompt, model_name="gpt2"):
    """Run inference on selected model."""
    result = run_inference(model_name, prompt)
    return result

# Create the Gradio interface
with gr.Blocks(title="HF Space - AI App Builder", theme=gr.themes.Soft()) as demo:
    gr.Markdown("# 🚀 HF Space - AI-Powered App Builder")
    gr.Markdown("Build, deploy, and manage AI applications.")
    
    with gr.Tab("Text Generation"):
        with gr.Row():
            with gr.Column():
                prompt_input = gr.Textbox(
                    label="Prompt",
                    placeholder="Enter your prompt here...",
                    lines=4
                )
                model_dropdown = gr.Dropdown(
                    choices=["gpt2", "distilgpt2", "EleutherAI/gpt-neo-125M"],
                    label="Model",
                    value="gpt2"
                )
                generate_btn = gr.Button("Generate", variant="primary")
            with gr.Column():
                output_text = gr.Textbox(label="Output", lines=8)
        
        generate_btn.click(
            fn=predict,
            inputs=[prompt_input, model_dropdown],
            outputs=output_text
        )
    
    with gr.Tab("Model Browser"):
        gr.Markdown("## Available Models")
        models_df = gr.DataFrame(
            headers=["Name", "Type", "Size", "License"],
            label="Model Catalog"
        )

if __name__ == "__main__":
    demo.launch(server_name="0.0.0.0", server_port=7860)

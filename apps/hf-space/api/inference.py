from transformers import pipeline

_pipelines = {}

def run_inference(model_name: str, prompt: str) -> str:
    """Run text generation inference."""
    if model_name not in _pipelines:
        _pipelines[model_name] = pipeline("text-generation", model=model_name)
    
    pipe = _pipelines[model_name]
    results = pipe(prompt, max_new_tokens=200, do_sample=True)
    return results[0]["generated_text"]

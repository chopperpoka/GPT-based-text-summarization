from transformers import T5Tokenizer, T5ForConditionalGeneration


tokenizer = T5Tokenizer.from_pretrained('t5-small')
model = T5ForConditionalGeneration.from_pretrained('t5-small')


def generate_summary(text):
    inputs = tokenizer.encode("summarize: " + text, return_tensors='pt', max_length=512, truncation=True)
    summary_ids = model.generate(inputs, max_length=150, min_length=40, length_penalty=2.0, num_beams=4, early_stopping=True)
    summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
    return summary


input_text = "As the sun set over the small town, Sarah couldn't shake the feeling that something was wrong. She checked the locks on her doors and windows before settling in for the night. Suddenly, she heard a loud noise outside. She peeked through the blinds and saw a group of strangers approaching her house. She grabbed her phone and called the police, praying they would arrive in time."
summary = generate_summary(input_text)
print(summary)


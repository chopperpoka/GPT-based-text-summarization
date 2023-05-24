# TextXtract
TextXtract is a project that utilizes GPT-based models to automatically generate concise and coherent summaries of textual content. This repository contains the codebase for implementing text summarization using GPT models with the integration of Flask, React, and Axios.

## Features
Automatic Text Summarization: The project leverages GPT-based models to generate summaries of input text. By employing state-of-the-art natural language processing techniques, TextXtract produces condensed and meaningful summaries that capture the key information from documents or articles.

Customization and Fine-tuning: The codebase enables users to fine-tune GPT models on specific domains or datasets, allowing for customization and adaptation to particular use cases. Fine-tuning empowers the models to learn from specific examples and optimize the generated summaries according to desired criteria.

Evaluation and Performance Metrics: The project incorporates evaluation metrics to assess the quality and effectiveness of the generated summaries. Metrics such as ROUGE (Recall-Oriented Understudy for Gisting Evaluation) can be employed to evaluate the summaries against reference summaries, providing insights into the performance and quality of the summarization model.

## Technologies Used

**Transformers Library**: The project utilizes the Hugging Face Transformers library, which provides a wide range of pre-trained models, including GPT models, for natural language processing tasks. The library offers an easy-to-use interface for fine-tuning models and generating summaries based on the GPT architecture.

**Flask**: Flask is a lightweight web framework for Python that allows for the development of web applications. In TextXtract, Flask is used to create the backend server that handles requests, processes text summarization, and provides APIs for frontend communication.

**React**: React is a popular JavaScript library for building user interfaces. In TextXtract, React is used for developing the frontend interface, providing a seamless and interactive user experience.

**Axios**: Axios is a JavaScript library used for making HTTP requests from the frontend to the backend server. It facilitates communication between the React frontend and the Flask backend in TextXtract.

## Getting Started


To get started with TextXtract, follow these steps:

Clone the repository:


``` git clone https://github.com/01010110-Code/TextXtract.git ```

Install backend dependencies:


``` cd TextXtract/backend ```

``` pip install -r requirements.txt ```

Install frontend dependencies:


``` cd ..  ```

``` npm install ```

Start the backend server:

``` cd ../backend ```

``` python3 app.py ```


This will start the Flask server and make it accessible at http://localhost:5000.

Start the frontend development server:

``` cd ../frontend ```

``` npm start ```

This will start the React development server and open the TextXtract application in your default web browser at http://localhost:3000.

Use the TextXtract application:

You can now use the TextXtract application in your web browser to input text, generate summaries, and interact with the generated results.

## Contributing

Contributions to TextXtract are welcome! If you'd like to contribute, please follow the guidelines outlined in the repository. This may include bug fixes, feature enhancements, or documentation improvements.

## License

The TextXtract project is licensed under the Apache 2.0 License. You are free to modify and distribute the codebase as per the terms of the license.

## Contact

If you have any questions or suggestions related to TextXtract, please feel free to reach out by creating an issue in






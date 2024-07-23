import { textToHtmlMapper } from "../utils/mappers";

export const generateTemplate = (title : string, message : string) => {
  return `
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            height: 100%;
        }
        .container {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 600px;
            height:100%;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 3px rgba(0,0,0,0.1);
            overflow: auto;
        }
        .header {
            text-align: center;
            padding: 10px 0;
            background-color: #007BFF;
            color: #ffffff;
            border-radius: 8px 8px 0 0;
        }
        .content {
            padding: 20px;
            line-height: 1.6;
            color: #333333;
            flex-grow: 1;
        }
        .footer {
            text-align: center;
            padding: 10px;
            font-size: 12px;
            color: #777777;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            margin: 20px 0;
            background-color: #007BFF;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
        }
    </style>
    <div class="container">
        <div class="header">
            <h1>${title}</h1>
        </div>
        <div class="content">
            ${textToHtmlMapper(message)}
        </div>
        <div class="footer">
            <p>&copy; 2024 Twoja Firma. Wszelkie prawa zastrzeżone.</p>
        </div>
    </div>
`
};
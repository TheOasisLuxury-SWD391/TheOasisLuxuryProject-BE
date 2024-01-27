import express from 'express';
// import YAML from 'yaml';
// import fs from 'fs';
// import path from 'path';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import databaseService from './services/database.services';
import projectRouter from './routes/projects.routes';

// const file = fs.readFileSync(path.resolve('the-oasis-luxury-api.yaml'), 'utf8');
// const swaggerDocument = YAML.parse(file);
const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'OaSis Luxury API',
      version: '1.0.0',
      description: 'The OaSis Luxury API'
    },
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },
  apis: ['./openapi/*.yaml']
};
const openapiSpecification = swaggerJSDoc(options);

const app = express();
app.use(express.json());
const port = 5000;
//kết nối database
databaseService.connect();
app.get('/', (req, res) => {    
  res.send('Welcome to OaSis Luxury API');
});
app.use('/api/v1/projects', projectRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));
app.listen(port, () => {
  console.log(`The OaSis Luxury này đang chạy swagger trên http://localhost:${port}/api-docs`);
});

import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection';
import { UserService } from '../services/UserService';
import UserController from '../controllers/UserController';

// Crea un contenedor de dependencias
const container = new ContainerBuilder();
// const loader = new YamlFileLoader(container);

// Carga la configuración de servicios desde el archivo config.yml
// loader.load(`${__dirname}/config.yml`);

// Registra el servicio UserController en el contenedor
container.register('App.UserService', UserService);
container.register('App.UserController', UserController, ['@App.UserService']);

export default container;

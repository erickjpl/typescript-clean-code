import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection';

// Crea un contenedor de dependencias
const container = new ContainerBuilder();
const loader = new YamlFileLoader(container);

// Carga la configuración de servicios desde el archivo config.yml
loader.load(`${__dirname}/config.yml`);

export default container;

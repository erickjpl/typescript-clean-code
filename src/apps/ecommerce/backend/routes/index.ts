import { Router } from 'express';
import glob from 'glob';

export function registerRoutes (router: Router) {
  // const routes = glob.sync(`${__dirname}/**/*.route.*`);
  const routes = [
    `${__dirname}/guest.route.ts`,
    `${__dirname}/users.route.ts`,
    `${__dirname}/products.route.ts`,
    `${__dirname}/hexagonal-products.route`
  ]
  routes.map(route => register(route, router));
}

function register (routePath: string, router: Router) {
  const route = require(routePath);
  route.register(router);
}

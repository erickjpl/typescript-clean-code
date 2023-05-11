import { Router } from 'express';
import glob from 'glob';

export function registerRoutes (router: Router) {
  try {
    const routes = glob.sync(`${__dirname}/**/*.route.*`);
    routes.map(route => register(route, router));
  } catch (e) {
    console.info(e)
  }
}

function register (routePath: string, router: Router) {
  const route = require(routePath);
  route.register(router);
}
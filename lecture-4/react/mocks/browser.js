import {setupWorker} from 'msw/browser';
import {routes} from './routes';

export const worker = setupWorker(...routes);

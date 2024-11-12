import {ApiClient} from './ApiClient';

export class CoffeeApiClient extends ApiClient {
    constructor(apiUrl, client) {
        super(client, apiUrl);
    }

    getCoffees() {
        return this.request(this.url('/api/v1/coffees/'));
    }

    createCoffee(name, description) {
        return this.request(this.url('/api/v1/coffees/'), {
            method: 'POST',
            body: this.body({
                name,
                description,
            }),
        });
    }

    brewCoffee(id) {
        return this.request(this.url(`/api/v1/coffees/${id}/brew/`), {
            method: 'POST',
        });
    }

    static create() {
        return new CoffeeApiClient(
            'https://coffee.com',
            window.fetch.bind(window),
        );
    }
}

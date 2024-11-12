import {http, HttpResponse} from 'msw';

const baseUrl = 'https://coffee.com';

export const routes = [
    http.get(`${baseUrl}/api/v1/coffees/`, () =>
        HttpResponse.json({
            coffees: [
                {
                    id: 1,
                    name: 'Espresso',
                    description: 'Strong and bold single shot of coffee.',
                },
                {
                    id: 2,
                    name: 'Latte',
                    description:
                        'Espresso with steamed milk and a layer of foam.',
                },
                {
                    id: 3,
                    name: 'Cappuccino',
                    description:
                        'Equal parts espresso, steamed milk, and foam.',
                },
                {
                    id: 4,
                    name: 'Americano',
                    description: 'Espresso with hot water.',
                },
                {
                    id: 5,
                    name: 'Mocha',
                    description: 'Espresso with steamed milk and chocolate.',
                },
                {
                    id: 6,
                    name: 'Macchiato',
                    description: 'Espresso with a dollop of steamed milk.',
                },
                {
                    id: 7,
                    name: 'Flat White',
                    description: 'Espresso with velvety steamed milk.',
                },
            ],
        }),
    ),
    http.post(`${baseUrl}/api/v1/coffees/`, async ({request}) => {
        const {name, description} = await request.json();

        if (!name) {
            return HttpResponse.json('"name" param is required.', {
                status: 400,
                statusText: 'Bad Request',
            });
        }

        if (!description) {
            return HttpResponse.json('"description" param is required.', {
                status: 400,
                statusText: 'Bad Request',
            });
        }

        await new Promise(resolve => setTimeout(resolve, 2000));

        return HttpResponse.json({
            id: 8,
            name,
            description,
        });
    }),
    http.post(`${baseUrl}/api/v1/coffees/:id/brew/`, async () => {
        await new Promise(resolve => setTimeout(resolve, 2000));

        return HttpResponse.json(
            "Server refuses to brew coffee because it's, permanently, a teapot",
            {
                status: 418,
                statusText: "I'm a teapot",
            },
        );
    }),
];

module.exports = {
  description: 'API  Generator',
  prompts: [
    {
      type: 'input',
      message: 'Api name',
      name: 'name',
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'app/api/v1/{{lowerCase name}}/route.ts',
      templateFile: 'generators/api/route.ts.hbs',
    },
  ],
}

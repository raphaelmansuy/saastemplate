module.exports = {
  description: 'Component  Generator',
  prompts: [
    {
      type: 'input',
      message: 'Component name',
      name: 'name',
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'components/{{properCase name}}.tsx',
      templateFile: 'generators/component/Component.tsx.hbs',
    },
  ],
}
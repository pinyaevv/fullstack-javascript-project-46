import js from "@eslint/js";

export default [
    js.configs.recommended,

   {
    languageOptions: {
        globals: {
            console: "readonly" // Добавил глобальную переменную, чтобы не ругался линтер.
        },
       },
       rules: {
           "no-unused-vars": "warn",
           "no-undef": "warn"
       }
   }
];
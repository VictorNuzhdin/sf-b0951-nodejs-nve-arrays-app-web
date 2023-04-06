const router = require('express').Router();
const storage = require('./simpleStorage');
// Для чтения файла "sampleDataCSV.csv" и преобразование его в JSON :: csvtojson
const csv2json = require('csvtojson');


// Чтение CSV файла, преобразование его в JSON с передачей через Роутер в форму для отображения :: csvtojson
csv2json()
  .fromFile('sampleDataCSV.csv')
  .then(employeesJSON => {
    //..преобразуем json в csv и удаляем ковычки в полях данных: "value1", "value2" для вывода в форму как пример
    const replacer = (key, value) => value === null ? '' : value;
    const header = Object.keys(employeesJSON[0]);
    let csvData = [
      header.join(','),
      ...employeesJSON.map(
            row => header.map(fieldName => JSON.stringify(row[fieldName], replacer).replace('"', '').replace('"', '')).join(',')
      )
    ].join('\r\n');

    //..init route
    router.get('/', function(request,response) {
      // Link with ./views/*.mustache template files
      //..передаем пример csv-данных в шаблон явно
      response.render ('dataInputTmpl', {
        pageTitle: "Обработка CSV/JSON списка объектов Employee",
        sampleDataJsonObjects: employeesJSON,
        sampleDataJsonString: JSON.stringify(employeesJSON, null, 3),
        sampleDataCsvString: csvData
      });
    });
  })
  .catch(err => {
    // log errors
    console.log(err)
  })

router.post('/submitDataCSV', function (request, response) {
  storage.setValue(request.body.dataCSV);
  response.redirect('/dataOutput');
});

module.exports = router;

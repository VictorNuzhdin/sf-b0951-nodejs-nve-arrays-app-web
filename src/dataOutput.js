let router = require('express').Router();
let storage = require('./simpleStorage');

//--ПОДКЛЮЧАЕМ свой NPM пакет для работы с Масивами типа "Employee"
const empArrays = require('nve-arrays');


//--СОЗДАЕМ Класс "Employee" для создания тестовых объектов
/**
 *=Класс "Сотрудник"
 * @field classTitle     - заголовок класса (поле класса);
 * @field totalQuantity  - кол-во сотрудников (созданных объектов);
 * @field totalSalary    - сколько выплачено зар.платы;
 * @field totalAvgSalary - средняя зп;
 * @field #gid           - глобальный уникальный идентификатор сотрудника;
 * @field #name          - имя (фио);
 * @field #age           - возраст;
 * @field #salary        - заработная плата в месяц;
 * @field #clsTitle      - заголовок класса (поле объекта);
 * 
 */
 class Employee {
    static classTitle = "Class Employee";
    static totalQuantity = 0;
    static totalSalary = 0;
    static totalAvgSalary = 0;
    #gid;
    #name;
    #age;
    #salary;
    #clsTitle

    //..Метод Конструктора класса
	constructor(gid, name, age, salary) {
        this.#gid = gid;
		this.#name = name;
        this.#age = age;
        this.#salary = salary;
        this.#clsTitle = Employee.classTitle;
        //..считаем статистику по созданным объектам
        Employee.totalQuantity += 1;
        Employee.totalSalary += salary;
	}

	getID() {
		return this.#gid;
	}

	getName() {
		return this.#name;
	}

	getAge() {
		return this.#age;
	}

	getSalary() {
		return this.#salary;
	}

    getInfoCSV(isHeader = false) {
        // isHeader: default false
        // csv delimeter
        const dlm = ", ";
        let empDataCSVHeader = "empId" + dlm + "empName" + dlm + "empAge" + dlm + "empSalary";
        let empDataCSV = this.#gid + dlm + this.#name + dlm + this.#age + dlm + this.#salary;
        //
        return isHeader ? empDataCSVHeader + "\n" + empDataCSV : empDataCSV;
    }

    getClassTitle() {
        return this.#clsTitle;
    }

    static getClassTitle() {
        return Employee.classTitle;
    }
}

//--
router.get('/dataOutput', function(request,response) {
  let dataCSV = storage.getValue();

  //..преобразумем строковое JSON представление в JSON Объекта
  const jsonObjArray = JSON.parse(dataCSV);

  //..теперь можно формировать список объектов класса Employee в цикле обхода JSON структуры
  let emps = [];
  for (const key of Object.keys(jsonObjArray)) {
      emps.push(new Employee(1001, 'John Does', 42, 4000));
  }

  //..теперь можно передать список объектов в Метод getStatFromListObjectsJSON() из npm пакета "nve-arrays"
  //  и далее передавать полученный результат в response для вывода в шаблон
  let empsStatJSON = empArrays.getStatFromListObjectsJSON(emps);

  // Link with ./views/*.mustache template files
  response.render ('dataOutputTmpl',
     {
       pageTitle1: "Результат обработки по цепочке",
       pageTitle2: "CSV file - JSON - Employee - getStatFromListObjectsJSON()",
       //dataCSV: dataCSV
       dataCSV: empsStatJSON
     });
  });

module.exports = router;

# __Task 2. Testing__

Task [description here](https://github.com/rolling-scopes-school/basic-nodejs-course/blob/master/descriptions/testing.md)

Task due date / deadline date - 21.11.21 / 21.11.21 23:59(GMT+3)

Self check:
 
 TOTAL POINTS - _** 100 points**_
 
-----------
## __Evaluation criteria__

# Testing

## Баллы за реализацию

1. По **плюс 2 балла** за каждый юнит-тест (не более **20 баллов** в сумме, баллы начисляются не более чем за 3 теста на каждую отдельную функцию/компонент).
2. Покрытие не менее 70% **плюс 20 баллов** (покрытие по **строкам**, вычисляется при помощи `jest --coverage`)
3. В тестах задействованы все сценарии из описания **плюс 20 баллов**
4. Для тестирования используются mock-объекты **плюс 20 баллов**

Evaluation criteria   | Description | URL 
----------------------|-------------|-----
1 | По **плюс 2 балла** за каждый юнит-тест (не более **20 баллов** в сумме, баллы начисляются не более чем за 3 теста на каждую отдельную функцию/компонент). | https://github.com/SeLub/shop-aws-be/tree/task-9/bff-service
2 | Покрытие не менее 70% **плюс 20 баллов** (покрытие по **строкам**, вычисляется при помощи `jest --coverage`) | https://yjktumlqrl.execute-api.eu-central-1.amazonaws.com/dev/products
3 | В тестах задействованы все сценарии из описания **плюс 20 баллов** | http://selub-bff-api-env.eu-central-1.elasticbeanstalk.com/product
4 | Для тестирования используются mock-объекты **плюс 20 баллов** | https://yjktumlqrl.execute-api.eu-central-1.amazonaws.com/dev/products/89da7309-e5ed-48a4-b4e6-ae47c947ae12

## Продвинутая реализация

1. Покрытие не менее 85% **плюс 20 баллов** (покрытие по **бранчам** вычисляется при помощи `jest --coverage`)

## Штрафы 

* Не используется Jest **минус 80 баллов**
* Имеются коммиты после дедлайна, за исключением коммитов, изменяющих исключительно в `Readme.md` либо вспомогательные файлы (`.gitignore`, `.prettierrc.json` и т.д.) **минус 30% от максимального балла за задание (-30 баллов)**
* Отсутствует PR либо его описание некорректно (отсутствуют либо некорректен любой из 3 обязательных пунктов) **минус 20 баллов**
* Отсутствует отдельная ветка для разработки **минус 20 баллов**
* Меньше 3 коммитов в ветке разработки, не считая коммиты, вносящие изменения только в `Readme.md` либо вспомогательные файлы (`.gitignore`, `.prettierrc.json` и т.д.) — **минус 20 баллов**

------------

# __Summary Report__

Evaluation criteria   | Description | URL 
----------------------|-------------|-----
Cr.1 | По **плюс 2 балла** за каждый юнит-тест (не более **20 баллов** в сумме, баллы начисляются не более чем за 3 теста на каждую отдельную функцию/компонент). | https://github.com/SeLub/shop-aws-be/tree/task-9/bff-service
Cr.1 | Покрытие не менее 70% **плюс 20 баллов** (покрытие по **строкам**, вычисляется при помощи `jest --coverage`) | https://yjktumlqrl.execute-api.eu-central-1.amazonaws.com/dev/products
Cr.2 | В тестах задействованы все сценарии из описания **плюс 20 баллов** | http://selub-bff-api-env.eu-central-1.elasticbeanstalk.com/product
Cr.1 | Для тестирования используются mock-объекты **плюс 20 баллов** | https://yjktumlqrl.execute-api.eu-central-1.amazonaws.com/dev/products/89da7309-e5ed-48a4-b4e6-ae47c947ae12
Cr.1 | bff-service service API: PRODUCT by ID (GET) | http://selub-bff-api-env.eu-central-1.elasticbeanstalk.com/product/?id=89da7309-e5ed-48a4-b4e6-ae47c947ae12
Cr.1 | Product-service service API: CREATE PRODUCT (POST) | https://yjktumlqrl.execute-api.eu-central-1.amazonaws.com/dev/products
Cr.1 | bff-service service API:: CREATE PRODUCT (POST) |  http://selub-bff-api-env.eu-central-1.elasticbeanstalk.com/product
Cr.1 | Cart-service service API: Products in Cart (GET) | http://selub-cart-api.eu-central-1.elasticbeanstalk.com/api/profile/cart
Cr.2 | bff-service service API Products in Cart (GET) | http://selub-bff-api-env.eu-central-1.elasticbeanstalk.com/cart
Ad.3 | How to check cache work - read below. I use module **node-cache**| https://github.com/SeLub/shop-aws-be/blob/task-9/bff-service/routes/index.js

.....

Я уложился в дедлайн и коммиты после не го делать не буду.

Оставляю за собой право на коммит по исправлению и дополнению отчёта после дедлайна (так можно!).

__Спасибо за Ваше время и ваш интерес к моей работе!!!__

-----

## Запуск приложения

Запуск производится в окне терминала в папке программ:

`node enigma [параметры]`

**-c, --config 'chipher'** - обязательный параметр. Указывает, какими шифрами будет производиться шифрование или дешифрование. **'chipher'** - это код шифра который будет использован для шифрования/дешифрования.

**-i, --input [filename]** - Имя файла, откуда будут считаны данные. Если не указано, ввод будет производиться из стандартного потока ввода.

**-o, --output [filename]** - Имя файла, куда будут записаны данные. Если не указано, вывод будет производиться в стандартный поток вывода.

Призапуске необходимо учитывать правила ввода данные в условиях задания. Например:

* Дубликаты параметров не допускаются.

* Параметры могут быть в любой последовательности.

* После параметров -с и --config наличие следующего аргумента обязательно. 

* -с и --config не могут использоваться одновременно.

* Параметы должны быть в нижнем регистре (кроме chipher)

...и другие правила описанные в нашем задании.

**Примеры использования:**

Следующие примеры взяты из задания. Для проверки вы можете клонировать мой репозиторий и запустить программу скопировав данные команды. Файлы уже существую в репозитории и имеют исходное сообщение для вашего удобства.

```bash
$ node enigma -c "C1-C1-R0-A" -i "./letter.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!`

```bash
$ node enigma -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./letter.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!`

```bash
$ node enigma -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "./letter.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!`

```bash
$ node enigma -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "./letter.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `This is secret. Message about "_" symbol!`

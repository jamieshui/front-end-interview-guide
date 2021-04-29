# JS基础-变量类型和计算

- typeof运算符能判断哪些类型
- 何时使用 === 何时使用 ==
- 值类型和引用类型的区别
- 手写深拷贝

## JS 值类型和引用类型的区别

### 回答

两种类型间的主要区别是它们的**存储位置不同**，值类型的值直接保存在栈中，而引用类型的值保存在堆中，通过使用在栈中保存对应的指针来获取堆中的值。

### 相关知识

JS可分为两种类型的值，一种是基本数据类型，一种是复杂数据类型。

- 基本数据类型：**Undefined、Null、Boolean、Number、String**，还有ES6中新增的**Symbol**类型，代表创建后独一无二且不可变的数据类型，它的出现我认为主要是为了解决可能出现的全局变量冲突问题。
- 复杂数据类型指的是**Object**类型，所有其他的如**Array**、**Date**等数据类型都可以理解为Object类型的子类。

其中，基本数据类型直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用的数据，所以放入栈中存储。

引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

JS 引擎的堆栈模型在处理值类型与引用类型时采取的方式不同，如下**内存图**所示：

![值类型](https://cdn.jsdelivr.net/gh/jamieshui/image-hosting@master/picx-image-hosting/image.2oj7d1agehc0.png)

<center>值类型</center>

![image-20210418164048529](C:\Users\Jamie\AppData\Roaming\Typora\typora-user-images\image-20210418164048529.png)

<center>引用类型</center>



## 手写 JS 深拷贝

### 回答

```js
// 深拷贝的实现;
function deepCopy(object) {
  if (object == null || typeof object !== 'object') return object; // 只拷贝对象

  let newObject = Array.isArray(object) ? [] : {}; // 判断是数组还是对象

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObject[key] = deepCopy(object[key]); // 递归调用处理嵌套对象
    }
  }

  return newObject;
}
```

### 相关知识

- typeof运算符
  - 识别所有值类型（**Undefined、Boolean、Number、String、Symbol**）
  - 识别函数
  - 判断是否是引用类型（不可再细分）

> **ATTENTION**
>
> `typeof null` 的返回值为 `'object'`，但`null instanceof Object`的返回值为`false`，这是一个历史遗留问题。

- JS深浅拷贝的区别

  深拷贝相对浅拷贝而言，如果遇到属性值为引用类型的时候，它新建一个引用类型并将对应的值复制给它，因此对象获得的一个新的引用类型而不是一个原有类型的引用。

> **ATTENTION**
>
> 函数是特殊引用类型，但不用于存储数据，所以没有"拷贝、复制函数"的说法。

## 变量计算 - 注意某些类型转换的坑

- 字符串拼接

  如果 + 的其中一个操作数是字符串，则执行字符串拼接，否则执行数字加法（可以用parseInt(String)将字符串转换为数字进行数字运算）。

- ==

  ```js
  //除了 == null 之外，其他一律用 ===
  const obj = {x : 100}
  if (obj.a == null) {}
  // 相当于：if (obj.a === null || obj.a === undefined)
  ```

- if语句

  ```js
  // 以下都是 falsely 变量，除此之外都是 truly 变量
  !!0 === false
  !!NaN === false
  !!'' === false
  !!null === false
  !!undefined === false
  !!false === false
  ```

- 逻辑运算

  - || 和 && 返回它们其中一个操作数的值，而非条件判断的结果。

  - || 和 && 首先会对第一个操作数执行条件判断，如果其不是布尔值就先进行 ToBoolean 强制类型转换，然后再执行条件判断。

  - 对于 || 来说，如果条件判断结果为 true 就返回第一个操作数的值，如果为 false 就返回第二个操作数的值。

  - && 则相反，如果条件判断结果为 true 就返回第二个操作数的值，如果为 false 就返回第一个操作数的值。

# JS基础-原型和原型链

- 如何准确判断一个变量是不是数组？
- 手写一个简易的JQuery，考虑插件和扩展性
- class的原型本质，怎么理解？

## 如何理解 JS 原型（隐式原型和显式原型）

### 回答

- 在 JS 中我们是使用构造函数来新建一个对象的，每一个构造函数的内部都有一个 `prototype` 属性值，这个属性值是一个对象，这个对象包含了可以由该构造函数的所有实例共享的属性和方法。当我们使用构造函数新建一个对象后，在这个对象的内部将包含一个指针，这个指针指向构造函数的 `prototype` 属性对应的值，在 ES5 中这个指针被称为对象的**原型**。
- 当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又会有自己的原型，于是就这样一直找下去，也就是**原型链**的概念。原型链的尽头一般来说都是 `Object.prototype` 所以这就是我们新建的对象为什么能够使用 `toString()` 等方法的原因。

### 相关知识

- 原型关系
  - 每个class（构造函数）都有显式原型`prototype`
  - 每个实例都有隐式原型`__proto__`
  - 实例的`__proto__`指向对应class的`prototype`

![image](https://cdn.jsdelivr.net/gh/jamieshui/image-hosting@master/picx-image-hosting/image.6akh8c54fnk0.png)

- 基于原型的执行规则

  获取属性或执行方式时先在自身属性和方法中查找，若找不到则自动去`__proto__`中查找。

- 原型链

![image](https://cdn.jsdelivr.net/gh/jamieshui/image-hosting@master/picx-image-hosting/image.9etwffseahs.png)

`Object.prototype`即为该原型链的终点，而`Object.prototype.__proto__ == null`，这也印证了该原型链的结束。

## instanceof 是基于原型链实现的

### 回答

- instanceof 运算符用于判断构造函数的 `prototype`属性是否出现在对象的原型链中的任何位置。

```js
// 实现：
function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left), // 获取对象的原型
    prototype = right.prototype; // 获取构造函数的 prototype 对象

  // 判断构造函数的 prototype 对象是否在对象的原型链上
  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;

    proto = Object.getPrototypeOf(proto);
  }
}
```

## 手写一个简易的JQuery，考虑插件和扩展性

### 回答

```js
class jQuery{
    constructor(selector){
        const result = document.querySelectorAll(selector);
        const length = result.length;

        for(let i = 0; i < length; i++){
            this[i] = result[i];
        }
        this.length = length;
        this.selector = selector;
    }
    get(index){
        return this[index]
    }
    each(fn){
        for(let i = 0; i < this.length; i++){
            const elem = this[i];
            fn(elem);
        }
    }
    on(type, fn){
        return this.each(elem => {
            elem.addEventListener(type, fn, false);
        })
    }

    // 扩展更多DOM API
}

const $p = new jQuery('p');
$p.get(0);
$p.each((elem) => console.log(elem.nodeName))
$p.on('click', () => {
alert('点击');
})

// 插件
jQuery.prototype.dialog = function(info){
alert(info);
}

// “造轮子”
class myJQuery extends jQuery{
    constructor(selector){
        super(selector);
    }
    //扩展自己的方法
    addClass(className){

    }
}
```

# JS基础-作用域和闭包

- this的不同应用场景，如何取值？
- 手写bind函数
- 实际开发中闭包的应用场景，举例说明

## 什么是作用域？什么是自由变量？

### 回答

- 作用域：在 JavaScript 中, 作用域为可访问变量，对象，函数的集合。

  而作用域可分为：

  1. 全局作用域：网页中所有脚本和函数均可使用。
  2. 函数作用域：只能在当前函数中使用。
  3. 块级作用域：只能在当前的块中使用。

- 自由变量

  - 一个变量在当前作用域没有定义，但被使用了
  - 向上级作用域，一层一层依次寻找，直到找到为止
  - 如果到全局作用域都没找到，则报错 xxx is not defined

### 相关知识

- 作用域链
  - 作用域链的作用是保证对执行环境有权访问的所有变量和函数的有序访问，通过作用域链，我们可以访问到外层环境的变量和函数。
  - 作用域链的本质上是一个指向变量对象的指针列表。变量对象是一个包含了执行环境中所有变量和函数的对象。作用域链的前端始终都是当前执行上下文的变量对象。全局执行上下文的变量对象（也就是全局对象）始终是作用域链的最后一个对象。
  - 当我们查找一个变量时，如果当前执行环境中没有找到，我们可以沿着作用域链向后查找。
  - 作用域链的创建过程跟执行上下文的建立有关。

## 什么是闭包？闭包会用在哪里？

### 回答

- 闭包：指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，创建的函数可以访问到当前函数的局部变量。

> **ATTENTION**
>
> 自由变量的查找，是在函数定义的地方，向上级作用域查找，而不是在执行的地方。

- 闭包的用途：
  1. 使我们在函数外部能够访问到函数内部的变量，即隐藏数据只提供API。通过使用闭包，我们可以通过在外部调用闭包函数，从而在外部访问到函数内部的变量，可以使用这种方法来创建私有变量。
  2. 使已经运行结束的函数上下文中的变量对象继续留在内存中，因为闭包函数保留了这个变量对象的引用，所以这个变量对象不会被回收。

## this 有几种赋值情况

### 回答

1. 作为普通函数
2. 使用call、apply、bind
3. 作为对象方法被调用
4. 在class方法中调用
5. 箭头函数

> **ATTENTION**
>
> this的取值是在函数执行的时候确定的，并不是在函数定义的时候。

## 手写call、apply及bind函数

### 回答

```js
// call函数实现
Function.prototype.myCall = function (context) {
  // 判断调用对象
  if (typeof this !== 'function') {
    console.error('type error');
  }

  // 获取参数
  let args = [...arguments].slice(1),
    result = null;

  // 判断 context 是否传入，如果未传入则设置为 window
  context = context || window;

  // 将调用函数设为对象的方法
  context.fn = this;

  // 调用函数
  result = context.fn(...args);

  // 将属性删除
  delete context.fn;

  return result;
};

// apply 函数实现
Function.prototype.myApply = function (context) {
  // 判断调用对象是否为函数
  if (typeof this !== 'function') {
    throw new TypeError('Error');
  }

  let result = null;

  // 判断 context 是否存在，如果未传入则为 window
  context = context || window;

  // 将函数设为对象的方法
  context.fn = this;

  // 调用方法
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }

  // 将属性删除
  delete context.fn;

  return result;
};

// bind 函数实现
Function.prototype.myBind = function (context) {
  // 判断调用对象是否为函数
  if (typeof this !== 'function') {
    throw new TypeError('Error');
  }

  // 获取参数
  var args = [...arguments].slice(1),
    fn = this;

  return function Fn() {
    // 根据调用方式，传入不同绑定值
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    );
  };
};
```

# JS基础-异步

## 同步和异步有何不用

### 回答

简而言之，同步会阻塞代码执行，异步不会阻塞代码执行。

- 同步：当一个进程在执行某个请求的时候，如果这个请求需要等待一段时间才能返回，那么这个进程会**一直等待下去**，直到消息返回为止再继续向下执行。
- 异步：当一个进程在执行某个请求的时候，如果这个请求需要等待一段时间才能返回，这个时候进程会**继续往下执行**，不会阻塞等待消息的返回，当消息返回时系统再通知进程进行处理。

### 相关知识

- 单线程与异步
  - JS是单线程语言，只能同时做一件事
  - 浏览器和nodejs已支持JS启动进程，如web worker
  - JS和DOM渲染共用同一个线程，因为JS可修改DOM结构
  - 异步主要用于处理单线程问题（网络请求、定时任务）

## 异步的应用场景有哪些

### 回答

- 网络请求，如ajax图片加载
- 定时任务，如setTimeout

## 手写Promise加载一张图片

### 回答

```js
function loadImg(src) {
    return new Promise((resolve, reject) => {
      const img = document.createElement('img')
      img.onload = () => {
        resolve(img)
      }
      img.onerror = () => {
        const err = new Error(`图片加载失败 ${src}`)
        reject(err)
      }
      img.src = src
    })
}

// const url = 'https://img.mukewang.com/user/5a9fc8070001a82402060220-140-140.jpg'
// loadImg(url).then(img => {
//   console.log(img.width)
//   return img
// }).then(img => {
//   console.log(img.height)
// }).catch(ex => console.error(ex))

const url1 = 'https://img.mukewang.com/user/5a9fc8070001a82402060220-140-140.jpg'
const url2 = 'https://img.mukewang.com/user/5a9fc8070001a82402060220-100-100.jpg'

loadImg(url1).then(img1 => {
  console.log(img1.width)
  return img1 // 普通对象
}).then(img1 => {
  console.log(img1.height)
  return loadImg(url2) // promise 实例
}).then(img2 => {
  console.log(img2.width)
  return img2
}).then(img2 => {
  console.log(img2.height)
}).catch(ex => console.error(ex))
```

### 相关知识

- Promise可解决callback hell问题
'use strict';

let asyncTask = () =>
  new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve(1);
    } else {
      reject(new Error('Something went wrong'));
    }
  });

let makeMeLookSync = fn => {
  let iterator = fn();
  let loop = result => {
    !result.done && result.value.then(
      res => loop(iterator.next(res)),
      err => loop(iterator.throw(err))
    );
  };

  loop(iterator.next());
};

makeMeLookSync(function* () {
  try {
    let result = yield asyncTask();
  
    console.log('1: ', result);
  } catch (err) {
    console.log('2: ', err.message);
  }
});
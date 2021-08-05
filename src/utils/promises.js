const yesno = () => Math.random() >= 0.5;

exports.wait = function wait(ms = 1000, canReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (canReject && yesno()) reject({ success: false, ms });
      resolve({ success: true, ms });
    }, ms);
  });
};

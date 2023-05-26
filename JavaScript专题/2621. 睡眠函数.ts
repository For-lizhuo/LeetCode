async function sleep(millis: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, 100);
  });
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

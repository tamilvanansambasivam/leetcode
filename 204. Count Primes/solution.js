var countPrimes = function (n) {
  if (n <= 1) {
    return 0;
  }

  // Create an array to mark prime numbers
  const isPrime = new Array(n).fill(true);

  // Mark 0 and 1 as not prime
  isPrime[0] = isPrime[1] = false;

  // Apply the Sieve of Eratosthenes
  for (let i = 2; i * i < n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // Count the number of primes
  return isPrime.filter((value) => value).length;
};

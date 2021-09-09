const i,j, temporary, chunk = 10;
for (i = 0,j = array.length; i < j; i += chunk) {
    temporary = array.slice(i, i + chunk);
  }

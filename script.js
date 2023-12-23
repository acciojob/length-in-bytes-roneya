const byteSize = (str) => {
  const encoder = new TextEncoder();
  return encoder.encode(str).length;
	
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));

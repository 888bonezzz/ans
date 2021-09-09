

const company = { name: '3M', employees: [] };

company.getName = function getName() {
  return this.name;
};


company.getName();

company.name = '3M USA';
company.getName()

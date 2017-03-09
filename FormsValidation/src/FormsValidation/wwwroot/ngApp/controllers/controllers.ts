namespace FormsValidation.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
       
        public employee;
        addEmp() {
            console.log(`First Name: ${this.employee.fName}, Last Name: ${this.employee.lName}, Age: ${this.employee.age},Full or Part Time:${this.employee.fop} soh: ${this.employee.soh}Pay: ${this.employee.pay}`);
            
        }
    }



    export class AboutController {
        public message = 'Hello from the about page!';
    }

}

class Field {
    errors: string[];
    input: HTMLInputElement;

    constructor(input: any) {
        this.input = input;
        this.errors = [];

        let errorMessage = document.createElement('p');
        errorMessage.className = "text-danger";
        this.input.parentNode?.insertBefore(errorMessage, this.input.nextSibling);

        this.input.addEventListener('input', () => {
            this.errors = [];
            this.validate();
            errorMessage.innerHTML = this.errors[0] || '';
        })
    }

    validate() {}
}

function RequireFieldDecorator(field : Field): Field {
    let validate = field.validate;
    
    field.validate = function() {
        validate();
        let value =  field.input.value;
        if(!value) {
            field.errors.push("Requerido");
        }
    }

    return field;
}

function EmailFieldDecorator(field : Field): Field {
    let validate = field.validate;
    
    field.validate = function() {
        validate();
        let value =  field.input.value;
        if(value.indexOf("@") === -1) {
            field.errors.push("Debe ser un email");
        }
    }

    return field;
}

let field = new Field(document.querySelector('#email'));
field = RequireFieldDecorator(field);
field = EmailFieldDecorator(field);
/// <reference path="business-rules-engine.d.ts" />
/// <reference path="node-validators.d.ts" />
/// <reference path="../underscore/underscore.d.ts" />
/// <reference path="../q/Q.d.ts" />

export interface IPerson{
    Checked:boolean;
    FirstName:string;
    LastName:string;
    Email:string;
}


//create custom composite validator
var personValidator = new Validation.AbstractValidator<IPerson>();

//create field validators
var required = new Validators.RequiredValidator();
var email = new Validators.EmailValidator();
var maxLength = new Validators.MaxLengthValidator();
maxLength.MaxLength = 15;


personValidator.RuleFor("FirstName", required);
personValidator.RuleFor("FirstName", maxLength);

personValidator.RuleFor("LastName", required);
personValidator.RuleFor("LastName", maxLength);

personValidator.RuleFor("Email", required);
personValidator.RuleFor("Email", email);

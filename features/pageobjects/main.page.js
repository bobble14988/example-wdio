import Page from './page';

class MainPage extends Page {
    get inputName() {
        return $('#name');
    }

    get inputEmail() {
        return $('#email');
    }

    get inputPhone() {
        return $('#phone');
    }

    get inputSubject() {
        return $('#subject');
    }

    get inputMessage() {
        return $('#description');
    }

    get btnSubmit() {
        return $('#submitContact');
    }

    get confirmationMessage() {
        return $('//*[@class="row contact"]//h2');
    }

    get confirmationMessageSubject() {
        return $('(//*[@class="row contact"]//p[2])[1]');
    }

    get btnSingleRoomBook() {
        return $('//h3[text()=\'single\']/following-sibling::button');
    }

    async inputDetails (userDetails) {
        await this.inputName.setValue(userDetails.name);
        await this.inputEmail.setValue(userDetails.email);
        await this.inputPhone.setValue(userDetails.phone);
    }
}

export default new MainPage();

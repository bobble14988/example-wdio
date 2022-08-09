import Page from './page';

class GroceriesPage extends Page {
    searchInput() {
        return $('//input[@id="search-input"]');
    }

    searchButton() {
        return $('//button[text()="Search"]');
    }

    async doSearch (searchText) {
        await this.searchInput.setValue(searchText);
        await this.searchButton.click();
    }
}

export default new GroceriesPage();

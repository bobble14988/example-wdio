import Page from './page';

class ResultsPage extends Page {
    productTitle(productName) {
        return $(`//div[@data-auto="product-tile"]/descendant::span[text()="${productName}"]`);
    }
}

export default new ResultsPage();

export class HomePage{
    constructor(page){
        this.page=page
        this.galaxys6=page.locator('//a[text()="Samsung galaxy s6"]')
        this.addtocartbtn=page.locator('//a[text()="Add to cart"]')
        this.phonecategorylink=page.locator('//a[text()="Phones"]')
        this.monitorCategoryLink=page.locator('//a[text()="Monitors"]')
    }

    async randomItemAddTocart(){
        await this.galaxys6.click()
        
    }

    async clickPhoneCategoryLink(){
        await this.phonecategorylink.click()
    }

    async selectPhoneItem(itemName){
        await this.page.getByText(itemName, {exact:true}).click()
    }

    async selectMonitorsItem(itemName){
        await this.page.getByText(itemName,{exact:true}).click()
    }

    async clickMonitorsCategoryLink(){
        await this.monitorCategoryLink.click()
    }
}
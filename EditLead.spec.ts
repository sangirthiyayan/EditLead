import test,{expect} from '@playwright/test'
test("Edit lead",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.getByLabel("Username").fill("Demosalesmanager")
    await page.getByLabel("Password").fill("crmsfa")
    await page.getByRole('button', { name: 'Login' }).click()
    await page.getByText("CRM/SFA").click()
    await page.getByRole('link', { name: 'Leads' }).click()
    await page.getByRole('link', {name: 'Find Leads'}).click()
    await page.locator("//input[@name='firstName']").nth(2).fill("sangirthiyayan")
    await page.getByRole('button',{name:'Find Leads'}).click()
    await page.locator("(//table/tbody/tr[1]/td[1]/div/a)[1]").click()
    await page.locator("//a[text()='Edit']").click()
    await page.locator("#updateLeadForm_companyName").fill("Testleaf")
    await page.locator("#updateLeadForm_annualRevenue").fill("15000")
    await page.locator("#updateLeadForm_departmentName").fill("QA")
    await page.locator("#updateLeadForm_description").fill("Welcome  to  playwrght")
    await page.getByRole('button',{name:'Update'}).click()
    const value1 = await page.locator("#viewLead_firstName_sp")
    await expect (value1).toHaveText("sangirthiyayan")
    const value2 = await page.locator("#viewLead_statusId_sp").innerText()
    const space = value2?.trim()
    expect(space).toBe("Assigned")




})
// Features Button
const featuresBtn = document.getElementById('features-btn');
const featuresArrowDown = document.getElementById('features-arrow-down');
const featuresArrowUp = document.getElementById('features-arrow-up');
const featuresArrowUpCol = document.getElementById('features-arrow-up-col');
const featuresDropdown = document.getElementById('features-dropdown');

featuresBtn.addEventListener('mouseover', (e) => {
    featuresArrowDown.style.display = 'none';
    featuresArrowUp.style.display = 'inline-block';
    featuresArrowUpCol.style.stroke = 'hsl(0, 0%, 8%)';
    featuresBtn.style.color = 'hsl(0, 0%, 8%)';
});

featuresBtn.addEventListener('mouseout', (e) => {
    featuresArrowDown.style.display = 'inline-block';
    featuresArrowUp.style.display = 'none';
    featuresBtn.style.color = 'hsl(0, 0%, 41%)';
});

featuresDropdown.addEventListener('mouseover', (e) => {
    featuresArrowDown.style.display = 'none';
    featuresArrowUp.style.display = 'inline-block';
    featuresArrowUpCol.style.stroke = 'hsl(0, 0%, 8%)';
    featuresBtn.style.color = 'hsl(0, 0%, 8%)';
});

featuresDropdown.addEventListener('mouseout', (e) => {
    featuresArrowDown.style.display = 'inline-block';
    featuresArrowUp.style.display = 'none';
    featuresBtn.style.color = 'hsl(0, 0%, 41%)';
});

// Company Button
const companyBtn = document.getElementById('company-btn');
const companyArrowDown = document.getElementById('company-arrow-down');
const companyArrowUp = document.getElementById('company-arrow-up');
const companyArrowUpCol = document.getElementById('company-arrow-up-col');
const companyDropdown = document.getElementById('company-dropdown');

companyBtn.addEventListener('mouseover', (e) => {
    companyArrowDown.style.display = 'none';
    companyArrowUp.style.display = 'inline-block';
    companyArrowUpCol.style.stroke = 'hsl(0, 0%, 8%)';
    companyBtn.style.color = 'hsl(0, 0%, 8%)';
});

companyBtn.addEventListener('mouseout', (e) => {
    companyArrowDown.style.display = 'inline-block';
    companyArrowUp.style.display = 'none';
    companyBtn.style.color = 'hsl(0, 0%, 41%)';
});

companyDropdown.addEventListener('mouseover', (e) => {
    companyArrowDown.style.display = 'none';
    companyArrowUp.style.display = 'inline-block';
    companyArrowUpCol.style.stroke = 'hsl(0, 0%, 8%)';
    companyBtn.style.color = 'hsl(0, 0%, 8%)';
});

companyDropdown.addEventListener('mouseout', (e) => {
    companyArrowDown.style.display = 'inline-block';
    companyArrowUp.style.display = 'none';
    companyBtn.style.color = 'hsl(0, 0%, 41%)';
});
const medicines = {
    Агалгін: new Date("2022-05-01"),
    Ношпа: new Date("2025-07-02"),
    Альфахолін: new Date("2024-12-21"),
    Аспірин: new Date("2022-08-15"),
    Аспаркам: new Date("2024-04-18"),
};

const getMedicineNames = (medicines) => Object.keys(medicines);

const filterAndSortMedicines = (medicines) => {
    const currentDate = new Date();
    
    const entries = Object.entries(medicines);
    const validMedicines = entries.filter(([name, date]) => date > currentDate);
    const sortedMedicines = validMedicines.sort(([nameA, dateA], [nameB, dateB]) => dateA - dateB);
    const medicineNames = sortedMedicines.map(([name]) => name);
    
    return medicineNames;
};

console.log("Всі назви медикаментів:", getMedicineNames(medicines));
console.log("Відфільтровані та відсортовані медикаменти:", filterAndSortMedicines(medicines)); 
// university.js

// بيانات الجامعات
const universities = {
  "imam": {
    name: "جامعة الإمام الصادق (ع)",
    location: "بغداد",
    logo: "11.jpg",
    departments: ["الفقه", "القانون", "العلوم السياسية"]
  },
  "kafeel": {
    name: "جامعة الكفيل",
    location: "النجف الأشرف",
    logo: "66.png",
    departments: ["طب أسنان", "صيدلة", "تمريض"]
  },
  "ain": {
    name: "جامعة العين",
    location: "ذي قار",
    logo: "77.jpg",
    departments: ["هندسة مدنية", "إدارة أعمال", "حاسبات"]
  }
};

// استخراج اسم الجامعة من الرابط
const params = new URLSearchParams(window.location.search);
const uniKey = params.get("name");

const university = universities[uniKey];

if (university) {
  document.getElementById("uni-name").textContent = university.name;
  document.getElementById("uni-location").textContent = university.location;
  document.getElementById("uni-logo").src = university.logo;
  document.getElementById("uni-logo").alt = "شعار " + university.name;

  const list = document.getElementById("uni-departments");
  university.departments.forEach(dep => {
    const li = document.createElement("li");
    li.textContent = dep;
    list.appendChild(li);
  });
} else {
  document.querySelector(".university-info").innerHTML = "<p style='color:red;'>لم يتم العثور على الجامعة المطلوبة</p>";
}

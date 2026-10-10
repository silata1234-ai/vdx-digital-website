VDX Digital — промени за преглед

Източник: silata1234-ai/vdx-digital-website
Базов commit: 2d3bd04ecf8469bd38f30f97a8280ecf5401520e

Няма публикуване, push, pull request или промяна във Vercel/Sites.
Телефон: 0893 663 031 (потвърден от актуалния код).

Промени:
- Премахнати всички суми от пакетите. Услугите и описанията са запазени.
- Телефонен popup: tel:+359893663031, копиране и ръчна алтернатива.
- Клавиатура: Tab/Shift+Tab, Escape и връщане на фокуса.
- Запазени формите: mailto на началната страница и webhook по вътрешните страници.
- Подобрени малки екрани, навигация, карти, форми и асистент.
- Възстановени липсващите общи стилове на вътрешните страници в съществуващата синя визия.
- Намален тежкият blur ефект на телефон; няма добавени зависимости или изображения към сайта.
- Линкът за NUVÉ е актуален и във вътрешното портфолио.
- Забраненият vendor import не е възстановен.

Проверки:
- npm run build: PASS; всички пет страници са статично генерирани.
- Chromium: 5 маршрута × 7 ширини (320, 375, 390, 768, 1024, 1440, 1920).
- Няма открити излизащи елементи/хоризонтален scroll или JavaScript грешки.
- Popup: телефонен линк, копиране и отказ от clipboard, клавиатура, вложен асистент, landscape.
- Формите са тествани с прихванат mock отговор; НЕ са изпращани реални заявки към Make.
- Реални iPhone/Safari устройства не са тествани.

При одобрение за локално прилагане:
1. Направете резервно копие или локален commit на текущите си промени.
2. Копирайте папките app/, components/ и lib/ от този ZIP в проекта.
   ZIP съдържа само променените/новите файлове — останалите файлове остават.
3. npm run build
4. npm run dev и отворете http://localhost:3000.

Не са променяни package.json, package-lock.json, next.config.ts или lib/submit-lead.ts.
Ако имате непубликувани локални редакции в тези файлове, сравнете ги преди замяна.

Файлове:
- app/ai-assistant/page.tsx
- app/contact/page.tsx
- app/globals.css
- app/layout.tsx
- app/page.tsx
- app/portfolio/page.tsx
- app/services/page.tsx
- components/assistant-flow-panel.tsx
- components/contact.tsx
- lib/site-content.ts
- app/responsive.css
- components/modal.tsx
- components/phone-inquiry.tsx

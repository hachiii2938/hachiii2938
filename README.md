# Hachiii Portfolio (GitHub Pages)

一個使用 Vite + React + TypeScript 製作的作品集網站，部署在 GitHub Pages。

結構分成四個主要頁面：

- Home：入口、簡介與精選作品文字版
- School Life：學校生活卡片牆
- About & Hobbies：自我介紹與生活愛好
- Works：作品展示（可依種類篩選，點擊展開詳細說明）

背景與按鍵設計成**方便之後用自己畫的圖片替換**。

## 如何在 GitHub Pages 上線

1. 進到 GitHub 專案頁面 → **Settings → Pages**
2. Source 選擇 **GitHub Actions**
3. 每次 push 到 `main` 分支，Actions 會自動 build 並部署
4. 完成後可以在 Actions 的執行紀錄中看到公開網址

> 現在 workflow 假設是「專案型 Pages」：網址會是  
> `https://<你的帳號>.github.io/<repo 名稱>/`

如果未來你把 repo 改名成 `<帳號>.github.io` 當「個人站首頁」，請：

- 把 `vite.config.ts` 裡的 `base` 改成 `'/'`
- 把 `.github/workflows/deploy.yml` 裡的 `VITE_BASE` 也改成 `'/'`

## 本機開發（選擇性）

如果你電腦有安裝 Node.js（建議 20+）：

```bash
npm install
npm run dev
```

開啟瀏覽器到 `http://localhost:5173`。

## 之後你主要會改的地方

### 1. 學校生活（School Life）

- 資料檔：`src/data/school.ts`  
- 圖片：放在 `public/school/`，在資料裡填 `image: '檔名.webp'`

每個項目可以寫：

- `title`：標題
- `semester`：年級＋學期（例如：`Year 1 · Semester 1`）
- `location`：地點（可省略）
- `description`：簡短描述
- `tags`：標籤（例如 `['studio', 'friends']`）

### 2. 自我介紹與生活愛好（About & Hobbies）

- 資料檔：`src/data/about.ts`

你可以修改：

- `aboutText.intro` / `aboutText.studyFocus`：自我介紹文字
- `hobbies` 陣列：每個興趣的 `name` / `description`

頁面在 `src/pages/About.tsx`，如果你想加更多段落或連結，可以在這裡調整。

### 3. 作品展示（Works）

- 資料檔：`src/data/works.ts`
- 圖片：放在 `public/works/`，在資料裡填 `image: '檔名.webp'`

每個作品有這些欄位：

- `title`：作品名稱
- `year`：年份
- `medium`：媒材（例如 `Digital illustration`、`Film photo`）
- `kind`：類型（`'illustration' | 'photo' | 'mixed' | 'other'`）  
- `description`：作品簡介
- `image`：圖片檔名（選填，不填就只有文字卡片）

`Works` 頁面會依 `kind` 讓你用按鈕篩選。

### 4. 背景與按鍵（之後換成你自己的畫）

- 動態背景元件：`src/components/BackgroundScene.tsx`
- 全域樣式：`src/styles.css`
- 插畫風按鍵：`src/components/IllustrationButton.tsx`

你可以：

- 把 `BackgroundScene` 裡的「泡泡裝飾」改成你自己的圖（例如改成小貓、小房間等插畫）
- 在 `styles.css` 中調整顏色、圓角、陰影，做出你喜歡的氛圍
- 在 `IllustrationButton` 上加上你畫的按鍵邊框（可以用 background-image 或改 CSS）

> 建議做法：先把網站結構和文字內容填好，確定分類/作品都齊全，再慢慢把背景圖與按鍵換成自己的畫。


# Case study sayfaları: şablon spesifikasyonu

Bu dosya 5 proje detay sayfasının (Monevo, Foodpanda Partner, VDF NewAge, FoodPay, Yemek.com) yeni tasarımını tanımlar. Tasarım Claude'da bir canvas üzerinde yapıldı ve onaylandı; buradaki referans dosyalar o canvas'ın birebir dışa aktarımıdır.

## 1. Kaynaklar

| Ne | Nerede | Rolü |
|---|---|---|
| Tasarım + metinler | `docs/case-study/reference/<proje>-desktop.html` ve `-mobile.html` | **Tek doğruluk kaynağı.** Metinler buradan aynen alınır, yeniden yazılmaz. |
| Bu dosya | `docs/case-study/SPEC.md` | Kurallar, token'lar, bileşen yapısı |
| Yeni görseller | `public/images/projects/` | Kapaklar ve eksik hero mockup'ları |

Referans HTML'ler inline style'lı, statik tasarım çıktısıdır. **Production kodu değildir**, kopyalanıp yapıştırılmaz. Görsel değerler (boyut, boşluk, renk) ve metinler buradan okunur; uygulama aşağıdaki mimariyle yapılır.

`app/*-case-study/page.tsx` altındaki eski sayfalar ve `globals.css` içindeki eski case study override'ları (`.monevo-palette`, `.foodpanda-palette`, `.newage-palette`, `.monevo-detail` vb.) **referans alınmaz**. Yeni sayfalar sıfırdan yazılır, eskiler tamamen kaldırılır.

## 2. Mimari

```
content/case-studies/
  types.ts          # CaseStudy tipi ve blok tipleri
  monevo.ts
  foodpanda.ts
  newage.ts
  foodpay.ts
  yemekcom.ts
  index.ts          # tüm projelerin listesi (sıra: monevo, foodpanda, newage, foodpay, yemekcom)
components/case-study/
  CaseStudyLayout.tsx
  ...bloklar (aşağıda)
app/<slug>-case-study/page.tsx   # sadece ilgili içeriği CaseStudyLayout'a verir
```

- Mevcut URL'ler korunur: `/monevo-case-study`, `/foodpanda-case-study`, `/newage-case-study`, `/foodpay-case-study`, `/yemekcom-case-study`.
- Desktop ve mobil **ayrı bileşen değil**, tek bileşenin responsive halidir. Referanstaki mobil dosyalar 390px'teki hedef görünümü gösterir.
- Sayfalar Server Component olabilir; sadece bölüm menüsündeki aktif durum için küçük bir client bileşen gerekir.

## 3. Sayfa yapısı (yukarıdan aşağıya)

1. **Header**: solda `← All work` (ana sayfadaki `#work`'e gider), sağda `Resume` (CV indirme). 72px yükseklik (mobil 56px), altında 1px `--line` çizgi. Logo, ikon veya ana sayfa menüsü yok. Mevcut `components/header.tsx` içindeki case study dalı (`isMonevo`) bununla değiştirilir.
2. **Başlık bloğu**: kategori etiketi (`Fintech · Mobile app`), H1, tek paragraf özet, 4'lü meta satırı (Role, Duration, Platform/Client, Scope). Meta satırı `<dl>`; mobilde 2×2.
3. **Hero görseli**: `--surface` gri zemin üzerinde cihaz mockup'ı. Desktop: padding 64px, görsel `max-height: 560px`, ortalanmış. Mobil: padding 32px 20px, görsel tam genişlik.
4. **At a glance**: Problem / What I did / Outcome. Desktop'ta 3 sütun, mobilde alt alta. Kart değil, düz metin.
5. **Bölüm menüsü**: sayfadaki bölümlerden **otomatik üretilir**, sabit liste yok. Üstte ve altta 1px çizgi. Desktop: `flex-wrap`. Mobil: yatay kaydırılabilir, `white-space: nowrap`. Aktif bölüm `--accent` renginde, diğerleri `--muted`. Aktif durum IntersectionObserver ile.
6. **Bölümler**: her biri `NN Başlık` etiketi (örn. `01 Problem`), H2 ve bloklar. Desktop'ta etiket solda ayrı sütunda, başlığa uzanan çizgiyle; mobilde H2'nin üstünde. Ayrıntı bölüm 6'da.
7. **Other Projects**: o proje hariç diğer 4 proje, `content/case-studies/index.ts`'ten otomatik. Desktop 2 sütun, mobil tek sütun. 4:3 kapak görseli (`object-fit: cover`), başlık, tek satır kategori. Üstte 1px `--ink` çizgi.

Hangi projede hangi bölümlerin olduğu referans dosyalarda görülebilir; projeler aynı bölümlere sahip değildir (örn. NewAge'de Testing yoktur). Var olmayan bölüm render edilmez, menüde de görünmez.

## 4. Token'lar

```css
--ink: #15171c;        /* başlıklar, ana metin rengi */
--body: #3d3c45;       /* paragraf metni */
--muted: #6b6977;      /* etiketler, kaynak notları, pasif menü */
--line: #ececf0;       /* ince ayırıcılar */
--surface: #f4f4f6;    /* hero ve kapak zemini */
--accent: #4F3DF1;     /* sadece aktif menü öğesi ve link hover */
--bg: #ffffff;
```

Bu token'lar ana sayfanın yeni token sistemine eklenir. Varsa aynı değerdeki mevcut token'lar tekrar tanımlanmaz.

**Font:** Geist (projede zaten var). Başlıklar dahil her şey serifsiz. Georgia yalnızca ana sayfadaki `giz.` logosunda kalır.

## 5. Tipografi

| Rol | Desktop | Mobil |
|---|---|---|
| H1 | 56px / 1.05 / 500 / -0.03em | 34px / 1.1 / 500 / -0.025em |
| Özet paragraf | 20px / 1.55 | 17px / 1.55 |
| H2 (bölüm) | 34px / 1.15 / 500 / -0.02em | 26px / 1.2 / 500 / -0.02em |
| H3 (çözüm başlığı) | 24px / 500 / -0.01em | 20px / 500 / -0.01em |
| H3 (alt başlık) | 20px / 500 | 18px / 500 |
| Küçük başlık (liste başlıkları) | 17px / 600 | 16px / 600 |
| Gövde metni | 17px / 1.7 | 16px / 1.7 |
| Blok içi metin | 15–16px / 1.65 | 15px / 1.65 |
| Bölüm etiketi, meta etiketi | 13–14px, `--muted` | 13px |
| Metrik sayısı | 40px / 500 / -0.02em | 28px |

## 6. Yerleşim

- İçerik kabı: `max-width: 1120px`, yatay padding 40px (mobil 20px).
- **Desktop (≥768px), iki sütun:** her bölüm `grid-template-columns: 240px minmax(0, 1fr); gap: 48px`.
  - Sol sütun: bölüm etiketi ("01 Problem", 14px, #6b6977), `align-self: start`, `margin-top: 11px` ile H2'nin ilk satırına hizalı.
  - Etiketin sağında ince çizgi H2'ye doğru uzanır: 1px, #e2e1e8, `flex: 1`, `margin-right: -36px`. Bölümün ortasına değil, başlığa bakar.
  - Sağ sütun: H2 ve bölümün tüm içeriği. Metin `max-width: 720px`, sola yaslı.
  - Bir bölümün devamı olan bloklar (ek alt bölümler, içerik görselleri, figür çiftleri, kolon gridleri) da sağ sütunda başlar (sol kenardan 288px). Etiketi olmayan alt bölümlerde sol hücre boş kalır.
  - Tam genişlikte kalanlar sadece: başlık bloğu, hero, At a glance, section nav, Other Projects.
- **Mobil (<768px):** tek sütun. Etiket H2'nin üstünde, çizgi yok.
- Her bölümün bir H2'si var. H2'ler **Title Case** (küçük kalan kelimeler: and, or, the, a, an, of, to, in, on, for, vs., at, by; ilk kelime hariç).
- Bölümler arası: 112px (mobil 72px). Çözüm blokları arası: 96px (mobil 64px).
- İçerik görselleri: **zeminsiz**, sağ sütun genişliğinde (mobilde ekranın kenarından kenarına). Gri zemin sadece hero ve Other Projects kapaklarında.
- 390px'te **yatay kaydırma olmamalı**; geniş tablolar `overflow-x: auto` kutu içinde.
- Referans dosyalar (`reference/*.html`) bu yerleşimin birebir halidir; çelişki olursa referans geçerli.

## 7. Blok tipleri

`types.ts`'te bir union olarak tanımlanır. Referanslarda kullanılanlar:

| Blok | Açıklama |
|---|---|
| `paragraph` | Düz metin |
| `list` | Madde listesi; maddeler isteğe bağlı kalın bir başlık alabilir (`Feature underutilisation.` + açıklama) |
| `twoLists` | Yan yana iki liste (Goals / Success metrics gibi); mobilde alt alta |
| `metrics` | Üstü 1px `--ink` çizgili sayı + açıklama; desktop 2 veya 3 sütun, mobil 2 sütun veya alt alta. **Her zaman bir `source` notu alır** ("Source: live product analytics before the redesign.") |
| `steps` | Numaralı adımlar; satırlar 1px `--line` ile ayrılır |
| `principles` | Başlık + kısa metin üçlü/dörtlü ızgara, üstü 1px `--line` (Design strategy, Coverage mapping, Design system) |
| `labelValue` | `<dl>`: persona bilgileri, test katılımcıları |
| `table` | Sade tablo; başlık satırı altında 1px `--ink`, satırlar 1px `--line` |
| `quote` | Tek büyük alıntı + kaynak satırı |
| `quotes` | Kullanıcı alıntıları listesi, tırnak içinde, madde işaretsiz |
| `figure` | Görsel + isteğe bağlı `figcaption` (14px `--muted`) |
| `figurePair` | Yan yana iki görsel (Monevo feature enhancements); mobilde alt alta |
| `solution` | Başlık + görsel + sütunlar: `Why` / `Testing results` / `What users said` (veya `What improved`). 2 ya da 3 sütun; mobilde alt alta. Sütun başlıkları 13–14px `--muted` |

## 8. İçerik kuralları

- Metinler referans dosyalardan **aynen** alınır. Kısaltma, yeniden yazma yok.
- UI metinlerinde uzun tire (—) kullanılmaz. Etiketler `01 Problem` biçimindedir.
- Sayılar referanstaki gibi yüzde olarak yazılır (`85.7%`, `47.4% → 70% (+47.6%)`). Metrik blokları ve tablolarda verinin kaynağı (canlı veri / kullanılabilirlik testi) belirtilir.
- İkon kullanılmaz. Tek istisna metin içindeki `←` / `→` okları.
- Kart, gölge, gradyan, renkli zemin yok.

## 9. Görseller

- `next/image` kullan. `next.config.mjs`'te `images.unoptimized: true` kaldırılır.
- `public/images/design-mode/` altındaki `Frame%206.png` gibi adında `%20` geçen dosyalar anlamlı isimlerle yeniden adlandırılır (örn. `monevo-welcome.png`, `monevo-world.png`, `monevo-receipt.png`, `monevo-series.png`, `monevo-homepage-variants.png`, `monevo-most-spent.png`, `monevo-reminders.png`, `herosection.png` → `monevo-hero.png`, `dh.png` → `foodpanda-hero.png`). Referans HTML'leri bu yeniden adlandırmaya göre güncellemeye gerek yok, sadece kod güncellenir.
- **Kapaklar**: `public/images/projects/<slug>-cover.jpg`. Hem ana sayfadaki proje listesinde (`components/editorial-work.tsx`) hem `components/explore-more-work.tsx`'te vercel-storage URL'leri yerine bunlar kullanılır. Yemek.com kapağı yenidir; eskisindeki ekran metinleri bozuktu.
- **Hero'lar**: Monevo `herosection.png`, Foodpanda `dh.png`, NewAge `projects/newage-hero.png`, FoodPay `projects/foodpay-hero.png` (sağ üst köşedeki nokta deseni temizlenmiş hali), Yemek.com `yemekcom-hero-mockup.png`.
- **FoodPay UI ekranları**: referansta repodaki dosyalar kullanıldı (`foodpay-landing.png`, `foodpay-mobile-landing.png`, `foodpay-signup-login.png`, `foodpay-onboarding.png`). Eski sayfa ise bunların vercel-storage'daki versiyonlarını kullanıyordu (`Frame 1674`, `mobile web dashboard`, `Frame 1675`, `Frame 1676`). Onları indir ve repodakilerle karşılaştır; farklılarsa vercel-storage versiyonu güncel kabul edilir, onu `public/images`'a koy ve kullan.
- Çalışma bittiğinde repoda `vercel-storage.com` geçen hiçbir referans kalmamalı (`components/editorial-about-tools.tsx` dahil).

## 10. Kabul kriterleri

- `pnpm build` hatasız; `next.config.mjs`'teki `ignoreBuildErrors` kaldırılmış olarak.
- Case study stillerinde `!important` ve `[class*=...]` seçicisi yok.
- 5 sayfa 1440px ve 390px'te referans dosyalarla yan yana açıldığında aynı görünüyor. Referansları tarayıcıda doğrudan açabilirsin: görsel yolları `/images/...` olduğu için dev sunucusu üzerinden `public/` altına kopyalayarak ya da gözle karşılaştırarak.
- 390px'te hiçbir sayfada yatay kaydırma yok.
- Bölüm menüsünde var olmayan bölüme giden link yok.
- Eski case study kodu (sayfa içerikleri, `monevo-toc.tsx`, `monevo-lightbox-image.tsx`, `globals.css`'teki palette override'ları) silinmiş.

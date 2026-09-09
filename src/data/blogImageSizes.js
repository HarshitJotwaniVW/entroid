/* Pixel dimensions of the article hero photographs, measured from the files
   in public/blog-assets at the time they were added.

   Generated, not hand-written. They exist so `og:image:width` and
   `og:image:height` can be emitted for every article: Facebook and LinkedIn
   use them to decide whether a link renders as a large card or a thumbnail,
   and without them the first crawl has to fetch and measure the image before
   it can decide — which it often does not wait to do.

   Regenerate if the assets change. Reading them at request time is not an
   option: this is imported by metadata that must also build for the client. */
export const blogImageSizes = {
  '/blog-assets/1450101499163-c8848c66ca85.jpg': [1600, 1068],
  '/blog-assets/1451187580459-43490279c0fa.jpg': [1600, 1065],
  '/blog-assets/1454165205744-3b78555e5572.jpg': [1600, 1067],
  '/blog-assets/1454165804606-c3d57bc86b40.jpg': [1600, 1068],
  '/blog-assets/1460925895917-afdab827c52f.jpg': [1600, 1140],
  '/blog-assets/1461749280684-dccba630e2f6.jpg': [1600, 1068],
  '/blog-assets/1497215842964-222b430dc094.jpg': [1600, 1067],
  '/blog-assets/1497366216548-37526070297c.jpg': [1600, 1068],
  '/blog-assets/1497366811353-6870744d04b2.jpg': [1600, 1068],
  '/blog-assets/1504328345606-18bbc8c9d7d1.jpg': [1600, 1067],
  '/blog-assets/1504384308090-c894fdcc538d.jpg': [1600, 1067],
  '/blog-assets/1504868584819-f8e8b4b6d7e3.jpg': [1600, 1060],
  '/blog-assets/1507003211169-0a1dd7228f2d.jpg': [1600, 2400],
  '/blog-assets/1516321318423-f06f85e504b3.jpg': [1600, 1067],
  '/blog-assets/1517245386807-bb43f82c33c4.jpg': [1600, 1067],
  '/blog-assets/1517336714731-489689fd1ca8.jpg': [1600, 1280],
  '/blog-assets/1518186285589-2f7649de83e0.jpg': [1600, 1200],
  '/blog-assets/1519389950473-47ba0277781c.jpg': [1600, 1067],
  '/blog-assets/1521737604893-d14cc237f11d.jpg': [1600, 1050],
  '/blog-assets/1521791136064-7986c2920216.jpg': [1600, 1068],
  '/blog-assets/1522202176988-66273c2fd55f.jpg': [1600, 1067],
  '/blog-assets/1524758631624-e2822e304c36.jpg': [1600, 1067],
  '/blog-assets/1526374965328-7f61d4dc18c5.jpg': [1600, 1067],
  '/blog-assets/1531379410502-63bfe8cdaf6f.jpg': [1600, 2400],
  '/blog-assets/1531482615713-2afd69097998.jpg': [1600, 1067],
  '/blog-assets/1531746790731-6c087fecd65a.jpg': [1600, 1152],
  '/blog-assets/1531973576160-7125cd663d86.jpg': [1600, 1067],
  '/blog-assets/1533750349088-cd871a92f312.jpg': [1600, 1067],
  '/blog-assets/1541746972996-4e0b0f43e02a.jpg': [1600, 1067],
  '/blog-assets/1541888946425-d81bb19240f5.jpg': [1600, 1067],
  '/blog-assets/1542744173-8e7e53415bb0.jpg': [1600, 1067],
  '/blog-assets/1543269865-cbf427effbad.jpg': [1600, 1067],
  '/blog-assets/1543286386-713bdd548da4.jpg': [1600, 1067],
  '/blog-assets/1544197150-b99a580bb7a8.jpg': [1600, 1067],
  '/blog-assets/1550439062-609e1531270e.jpg': [1600, 1067],
  '/blog-assets/1550751827-4bd374c3f58b.jpg': [1600, 1068],
  '/blog-assets/1551288049-bebda4e38f71.jpg': [1600, 1067],
  '/blog-assets/1551434678-e076c223a692.jpg': [1600, 1067],
  '/blog-assets/1552581234-26160f608093.jpg': [1600, 1067],
  '/blog-assets/1552664730-d307ca884978.jpg': [1600, 1067],
  '/blog-assets/1553877522-43269d4ea984.jpg': [1600, 1067],
  '/blog-assets/1554224154-26032ffc0d07.jpg': [1600, 1125],
  '/blog-assets/1554224155-6726b3ff858f.jpg': [1600, 918],
  '/blog-assets/1556742049-0cfed4f6a45d.jpg': [1600, 1068],
  '/blog-assets/1556761175-5973dc0f32e7.jpg': [1600, 900],
  '/blog-assets/1556761175-b413da4baf72.jpg': [1600, 1200],
  '/blog-assets/1558494949-ef010cbdcc31.jpg': [1600, 898],
  '/blog-assets/1563013544-824ae1b704d3.jpg': [1600, 1067],
  '/blog-assets/1565043666747-69f6646db940.jpg': [1600, 1200],
  '/blog-assets/1573164713714-d95e436ab8d6.jpg': [1600, 1068],
  '/blog-assets/1573497491208-6b1acb260507.jpg': [1600, 1067],
  '/blog-assets/1578575437130-527eed3abbec.jpg': [1600, 1067],
  '/blog-assets/1581092160607-ee22621dd758.jpg': [1600, 1067],
  '/blog-assets/1581092918056-0c4c3acd3789.jpg': [1600, 1067],
  '/blog-assets/1589829545856-d10d557cf95f.jpg': [1600, 1067],
  '/blog-assets/1600585154340-be6161a56a0c.jpg': [1600, 1067],
  '/blog-assets/1600880292089-90a7e086ee0c.jpg': [1600, 2400],
  '/blog-assets/1600880292203-757bb62b4baf.jpg': [1600, 1067],
  '/blog-assets/1611974789855-9c2a0a7236a3.jpg': [1600, 1067],
  '/blog-assets/1614064641938-3bbee52942c7.jpg': [1600, 1067],
  '/blog-assets/1677442136019-21780ecad995.jpg': [1600, 900]
}

export const blogImageSize = (src) => blogImageSizes[src] || null

/* Share cards are cropped to roughly 1.91:1. A portrait hero centre-crops into
   a band across the middle of the photograph, which usually reads as a mistake
   — nine of the articles use a 2:3 image. Below this ratio the branded default
   is the better card, so `ogSafe` says whether the hero can carry one. */
export const OG_MIN_RATIO = 1.2

export const ogSafe = (src) => {
  const s = blogImageSizes[src]
  return Boolean(s && s[0] / s[1] >= OG_MIN_RATIO)
}

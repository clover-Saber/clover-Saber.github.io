# Original website migration

Target: clover-Saber/clover-Saber.github.io, default branch master.
Original baseline: 84db54296ad8ddc99b7b29d6fd07359d90d4e21f.
All original files remain recoverable from this Git commit. A complete local copy was also saved outside this checkout before replacement.

## Preserved personal information

The diff from the original template commit 1add6f9 to the baseline confirms these customized `_config.yml` fields:

- Name: Hao Yu
- Bio: Ph.D Student, Tongji University
- Employer: Tongji University (retained in profile data and bio)
- Location: Shanghai, China
- Email: 2410857@tongji.edu.cn
- Portrait: images/profile-yuhao.jpg, now src/assets/profile-yuhao.jpg (unchanged original bytes)

The GitHub link is corrected to the user-confirmed account clover-Saber.

## Template content omitted

The original about text, papers, talks, teaching, portfolio, CV education/experience, and blog posts were Academic Pages examples. They are not asserted as Hao Yu's achievements. The unchanged Google Scholar ID PS_CX0AAAAAJ, placeholder ORCID, John Snow PubMed search, academicpages GitHub profile, and bsky.app link also came from the template and are omitted pending genuine profile links.

No content from any unrelated GitHub account was migrated. Article and project lists intentionally start empty. The former EvoMyn integration is not present.

## Routes and deployment

The old about.html, year-archive, portfolio, cv, cv-json and resume links redirect to their new equivalents. Old template-only publications/talks/teaching examples are retired. Git history retains all original source files.

Use the GitHub Actions Pages source when merging this migration. PR builds do not deploy or replace the live site.

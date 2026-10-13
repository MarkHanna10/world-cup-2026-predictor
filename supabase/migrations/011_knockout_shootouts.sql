-- Migration 011: record who won a knockout tie decided on penalties
--
-- match_results stores the score after extra time, so a shootout leaves the
-- score level and the bracket cannot tell who went through. `winner` names the
-- side that advanced ('home' | 'away'). It stays null for group games and for
-- any knockout tie decided in play.

alter table public.match_results
  add column if not exists winner text
  check (winner in ('home', 'away'));

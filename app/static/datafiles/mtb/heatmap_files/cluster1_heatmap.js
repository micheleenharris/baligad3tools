var hcrow = [64, 68, 147, 140, 19, 37, 137, 41, 44, 69, 92, 98, 91, 94, 95, 90, 97, 93, 96, 116, 102, 114, 149, 56, 25, 113, 142, 152, 67, 127, 31, 30, 87, 156, 84, 86, 12, 3, 128, 70, 159, 45, 180, 50, 52, 132, 49, 46, 47, 186, 2, 43, 75, 139, 6, 79, 178, 60, 175, 63, 206, 112, 76, 20, 21, 109, 9, 34, 5, 163, 181, 161, 193, 26, 126, 130, 59, 61, 1, 177, 78, 134, 66, 125, 146, 117, 173, 189, 77, 169, 195, 51, 4, 122, 150, 80, 74, 108, 42, 101, 15, 179, 138, 33, 100, 104, 17, 136, 106, 197, 7, 8, 40, 194, 204, 82, 57, 107, 71, 160, 13, 10, 105, 196, 201, 176, 191, 110, 141, 185, 38, 202, 118, 174, 48, 119, 158, 203, 65, 39, 182, 81, 73, 190, 151, 157, 184, 24, 199, 11, 23, 133, 129, 187, 183, 148, 155, 103, 115, 143, 123, 120, 131, 88, 188, 89, 99, 83, 27, 85, 200, 207, 28, 55, 111, 32, 53, 121, 153, 54, 145, 154, 208, 192, 124, 144, 62, 162, 170, 164, 167, 165, 171, 205, 29, 58, 35, 36, 135, 168, 166, 72, 172, 14, 16, 18, 22, 198];
var hccol = [1, 4, 2, 3, 5];
var rowLabel = ['2867_H37Ra..Youman.media.replicate.1', '2867_H37Ra..Youman.media.replicate.2', '2867_H37Rv..Sauton.s.media.replicate.4', '2867_H37Rv..Youman.media.replicate.3', '2885_H37Ra..7H9.roll.replicate.2', '2885_H37Ra..7H9.roll.replicate.3', '2885_Strain.1254...replicate.3', '2885_Strain.1843..replicate.4', '2885_Strain.9700665..replicate.1', '2885_Strain.9802501..replicate.2', '4062_H37.Rv3132.34.KO.0.days.vs.Rv3132.34.KO..complemented..hypoxia.4.day.rep.4', '4062_MTB.strain.1254.Ctrl.vs.0.05.mM.DETA.NO.40min.rep.6', '4062_MTB.strain.1254.Ctrl.vs.0.5.mM.DETA.NO.40min.rep.4', '4062_MTB.strain.1254.Ctrl.vs.0.5.mM.KCN...2hr.hypoxia.rep.3', '4062_MTB.strain.1254.Ctrl.vs.2hr.Hypoxia.rep.1', '4062_MTB.strain.1254.Ctrl.vs.5.0.mM.DETA.NO.40min.rep.1', '4062_MTB.strain.1254.Ctrl.vs.5.0.mM.DETA.NO.40min.rep.2', '4062_MTB.strain.1254.Ctrl.vs.5.0.mM.DETA.NO.40min.rep.3', '4062_MTB.strain.1254.Ctrl.vs.5.0.mM.DETA.NO.40min.rep.4', '4062_MTB.strain.1254.Ctrl.vs.low.aeration...0.005.mM.DETA.NO.rep.3', '4062_MTB.strain.1254.Ctrl.vs.low.aeration...0.01.mM.DETA.NO.rep.3', '4062_MTB.strain.1254.Ctrl.vs.low.aeration..0.2..oxygen..2hr.rep.3', '4062_MTB1254.Day.0.vs.low.Oxygen.Day.4.rep.4', '4062_MTB1254.Day.0.vs.low.Oxygen.Day.4.rep.5', '4068_H37Rv.delta.mprAB.mutant.vs..H37Rv.delta.mprAB.mutant.SDS.treated.rep.3', '4068_H37Rv.vs..H37Rv.delta.mprAB.mutant.rep.6', '4082_H37Rv.wild.type.Vs.Rv3676.null.2', '4082_H37Rv.wild.type.Vs.Rv3676.null.6', '4082_H37Rv.wild.type.Vs.Rv3676.null.7', '4082_Rv3676.null.Vs.H37Rv.wild.type.2', '4082_Rv3676.null.Vs.H37Rv.wild.type.6', '4082_Rv3676.null.Vs.H37Rv.wild.type.7', '4084_High.iron.wt.vs.high.iron.ideR.KO.3b', '4089_H37Rv.whiB7.null.ethanol.vs..1.0.ug.ml.Tetracyclin.for.15.min.rep.3', '4089_H37Rv.whiB7.null.ethanol.vs..1.0.ug.ml.Tetracyclin.for.2.hr.rep.4', '4089_MTB1254.ethanol.vs..0.5.ug.ml.Tetracyclin.for.15.min.rep.3', '4089_MTB1254.ethanol.vs..0.5.ug.ml.Tetracyclin.for.30.min.rep.4', '4089_MTB1254.ethanol.vs..1.0.ug.ml.Erythromycin.for.15.min.rep.3', '4089_MTB1254.ethanol.vs..100.ug.ml.Erythromycin.for.15.min.rep.3', '4089_MTB1254.ethanol.vs..100.ug.ml.Tetracyclin.for.15.min.rep.2', '4089_MTB1254.ethanol.vs..100.ug.ml.Tetracyclin.for.30.min.rep.4', '4089_MTB1254.ethanol.vs..25.ug.ml.Erythromycin.for.30.min.rep.4', '4089_MTB1254.ethanol.vs..25.ug.ml.Tetracyclin.for.30.min.rep.2', '4089_MTB1254.ethanol.vs..25.ug.ml.Tetracyclin.for.30.min.rep.4', '4089_MTB1254.ethanol.vs..5.0.ug.ml.Erythromycin.for.30.min.rep.4', '4099_H37.Rv3133c.DosR.mutant.2hr.rep.1', '4099_H37.Rv3133c.DosR.mutant.2hr.rep.6', '4099_H37Rv.hypoxia.2hr.rep.5', '4100_H37Rv.0.2..Oxygen..2h..6', '4101_H37Rv.Day.0.vs.low.Oxygen.Day.4.rep.1', '4101_H37Rv.Day.0.vs.low.Oxygen.Day.4.rep.3', '4101_H37Rv.Day.0.vs.low.Oxygen.Day.4.rep.5', '4101_H37Rv.Day14.1', '4101_H37Rv.Day24.1', '4101_H37Rv.Day24.3', '4101_H37Rv.Day60.3', '4101_NRP.Day10..3', '4101_NRP.Day30..1', '4107_DIPED..50ug.mL..DMSO..12h', '4107_DIPED.50ug.mL.vs.DMSO.12h.1', '4107_DIPED.50ug.mL.vs.DMSO.12h.2', '4107_PBS.Tw.DMSOvs7H9..6h', '4107_PBS.Tween.7H9', '4107_pH4.8vspH6.8..2h.', '4107_X0.1mg.mL.TriclosanvsEtOH..6h', '4107_X0.1mg.mLTriclosanvsEtOH.6hC', '4107_X0.1ug.mL.RifpvsEtOH..6h', '4107_X0.2ug.mL.Mtm.ctrl..4h...1', '4107_X0.4mM.NaN3vsDMSO..4h', '4107_X0.4ug.mL.PA824.DMSO..6h..1', '4107_X0.5ug.mL.CervsEtOH..6hA', '4107_X100ug.mL.TriclosanvsEtOH..6h', '4107_X10ug.mL..59.DMSO..6h', '4107_X10ug.mL.CapvsEtOH..6h', '4107_X10ug.mL.TriclosanvsDMSO..6hC', '4107_X25ug.mLCPZ.0.1mMGSNO.DMSO..2', '4107_X50uM.NigericinvsDMSO..6h', '4363_H37Rv.hypoxia.4hr.rep.1', '4364_H37dosR.mutant.hypoxia.1.day.rep.4', '4364_H37dosR.mutant.hypoxia.8hr.rep.2', '4364_H37dosR.mutant.hypoxia.8hr.rep.3', '4365_H37Rv.sigma.H.null.mutant.diamide.1h.rep.4', '4396_H37Rv.cDNA.Cy3.vs.H37Rv.gDNA.Cy5..DS..rep.2', '4396_H37Rv.cDNA.Cy3.vs.H37Rv.gDNA.Cy5..DS..rep.3', '4396_H37Rv.cDNA.Cy5.vs.H37Rv.gDNA.Cy3.rep.2', '4396_Strain.32.cDNA.Cy3.vs.H37Rv.gDNA.Cy5..DS..rep.1', '4396_Strain.49.cDNA.Cy5.vs.H37Rv.gDNA.Cy3.rep.2', '4489_MTB1254.Opp.KO.complemented.vs.Opp.KO.in.7H9OADC..OD..1.0.1', '4489_MTB1254.Opp.KO.complemented.vs.Opp.KO.in.7H9OADC..OD..1.0.2', '4489_MTB1254.WT.vs.Rv3662c.3665c.KO.in.7H9OADC..OD.1.0.2', '4489_MTB1254.WT.vs.Rv3662c.3665c.KO.in.7H9OADC..OD.1.0.3', '4489_MTB1254.WT.vs.Rv3662c.3665c.KO.in.7H9OADC..OD.1.0.4', '4489_MTB1254.WT.vs.Rv3662c.3665c.KO.in.7H9OADC..OD.1.5.2', '4489_MTB1254.WT.vs.Rv3662c.3665c.KO.in.7H9OADC.Exp2..OD.0.3.1', '4489_MTB1254.WT.vs.Rv3662c.3665c.KO.in.7H9OADC.Exp2..OD.0.3.4', '4489_MTB1254.WT.vs.Rv3662c.3665c.KO.in.7H9OADC.Exp2..OD1.1', '4489_MTB1254.WT.vs.Rv3662c.3665c.KO.in.7H9OADC.Exp2..OD1.4', '4489_MTB1254.WT.vs.Rv3662c.3665c.KO.in.7H9OADC.Exp2..OD1.5.1', '4489_MTB1254.WT.vs.Rv3662c.3665c.KO.in.7H9OADC.Exp2..OD1.5.4', '4523_H37Rv.sigB.null.mutant.control.vs.5mM.Diamide.for.60.min.rep.4', '4523_H37Rv.wild.type.Vs.H37Rv.wild.type.rep.1', '4570_MTB.strain.TB294.Ctrl.vs.SigA.overexpression.rep2', '4570_MTB.strain.TB294.SigA.overexpression.va.Ctrl.DS..rep1', '4575_Extracted.Lung.Surfactant.30min.rep.3', '4575_Purified.Human.SP.A.Uncoated.2hrs.rep2', '4581_H37Rv.Ctrl.vs.2.ug.ml.garlic.extract.6hrs.rep.1', '4583_X0.2ug.ml.Isoniazid.vs.Ethanol.6hrs.rep.1', '4583_X0.4ug.ml.PA.824.vs.DMSO.6hrs.rep.1', '4583_X0.5ug.mL.Cerulenin.vs.DMSO..6hrs.rep.1', '4599_H37Rv.grown.in.7H9.vs.H37Rv.24hrs.after.infection.in.macrophages.rep.1', '4599_H37Rv.grown.in.7H9.vs.H37Rv.4hrs.after.infection.in.macrophages.rep.1', '4599_H37Rv.grown.in.7H9.vs.H37Rv.4hrs.after.infection.in.macrophages.rep.5', '4599_H37Rv.vs.SigE.mutant.24hrs.after.macrophage.infection.rep.1', '4599_H37Rv.vs.SigE.mutant.24hrs.after.macrophage.infection.rep.2', '4599_H37Rv.wild.type.vs.sigE.mutant.in.RPMI.media.for.2hrs..DS..rep.1', '4599_H37Rv.wild.type.vs.sigE.mutant.in.RPMI.media.for.2hrs..DS..rep.2', '4615_AA_10uM_2h_T0_01', '4615_AA_30uM_24h_02', '4615_AA_30uM_2h_03', '4615_AA_30uM_2h_05', '4615_AA_30uM_2h_06', '4615_AA_30uM_4h_04', '4615_AA_60uM_2h_T0_03', '4615_aceatate.induction.2', '4615_Acetate.3mM.10m.03', '4615_Acetate.3mM.2h.01', '4615_CK.for.AA.NA.4h', '4615_CK.for.MDG.24h.PA.NA', '4615_Glucose_20mM_1h.OA_50uM_10min', '4615_L2A_30uM_2h_04', '4615_L2A_30uM_2h_05', '4615_L2A_30uM_4h_T0_02', '4615_MDG.MD.glycerol', '4615_MTB1254_Bottom_14D_02', '4615_MTB1254_Pellicle_10D_01', '4615_MTB1254.0485.1._PA_12h_01', '4615_MTB1254.1683._01', '4615_MTB1254.B4.1._PA_4h_02', '4615_MTB1254.B4.1.Compl._PA_4h_02', '4615_MTB1254.fadA._01', '4615_OA_50uM_2h_01', '4615_OA_50uM_2h_03', '4615_OA_50uM_4h_01', '4615_PA_50uM_10min_04', '4615_PA_50uM_10min_05', '4615_PA_50uM_1h_05', '4615_PA_50uM_1h_06', '4615_PA_50uM_1h_10', '4615_PA_50uM_24h_01', '4615_PA_50uM_24h_07', '4615_PA_50uM_2h_04', '4615_PA_50uM_2h_07', '4615_PA_50uM_2h_T0_01', '4615_PA_50uM_30min_03', '4615_PA_50uM_30min_08', '4615_PA_50uM_30min_11', '4615_PA_50uM_8h_01', '4615_PA_50uM.AA_30uM_2h_03', '4615_PA_50uM.OA_30uM_2h_04', '4615_PA_50uM.OA_30uM_30min_03', '4615_Starvation_1254_12h_04', '4615_Starvation_1254_24h_02', '4615_Starvation_1254_24h_07', '4615_Starvation_1254_3d_02', '4615_Starvation_1254_5d_02', '4615_Starvation_1254_5d_03', '4615_Starvation_1254_5d_04', '4615_Starvation_1254_OA50_3d_03', '4615_Starvation_1254_OA50_3d_04', '4615_Starvation_1254_OA50_5d_01', '4615_Starvation_1254_OA50_5d_04', '4615_TBE285', '4615_Test_361.1', '4615_X2.BA_100uM_30min_01', '4637_H37Rv.control.vs.1mg.ml.cholesterol.for.3.hrs.rep.3', '4696_H37Rv.wt.vs.dosS.dosT.null.anaerobic.Gaspak.4hr.rep.2', '4696_H37Rv.wt.vs.dosS.null.anaerobic.Gaspak.4hr.rep.1', '4696_H37Rv.wt.vs.dosS.null.nitric.oxide.treatment.1hr.rep.1', '4696_H37Rv.wt.vs.dosS.null.nitric.oxide.treatment.1hr.rep.3', '4696_H37Rv.wt.vs.dosS.null.nitric.oxide.treatment.1hr.rep.4', '4703_Clinical.isolate.10514.01_Afri2.extra.vs.intracellular.in.resting.macrophages.rep.1', '4703_Clinical.isolate.2191.99_Uganda.extra.vs.intracellular.in.resting.macrophages.rep.2', '4704_Clinical.isolate.4130.02_Haarlem.extra.vs.intracellular.in.activated.macrophages.rep.1', '4704_Clinical.isolate.4130.02_Haarlem.extra.vs.intracellular.in.activated.macrophages.rep.2', '4729_H37Rv.wild.type.vs.PepD.null.mutant..DS..rep.1', '4729_H37Rv.wild.type.vs.PepD.null.mutant..DS..rep.2', '4731_X2ug.ml.PA.824.vs.DMSO.6hrs.rep.1', '4795_CDC1551.ctrl.vs.10.ug.ml.Thioridazine.1hr.rep.1', '4795_CDC1551.ctrl.vs.40.ug.ml.Thioridazine.2hr.rep.2', '4795_CDC1551.ctrl.vs.ctrl.at.0.hr.rep.1', '4795_CDC1551.ctrl.vs.ctrl.at.0.hr.rep.2', '4799_H37Rv.mouse.hallow.fiber..ctrl.vs.25mg.kg.Isoniazid.3rd.dose.6hrs.rep.2', '4799_H37Rv.nutrient.starved..ctrl.vs.1ug.ml.Isoniazid.for.2hrs.rep.1', '4799_H37Rv.O2.depleted..ctrl.vs.1ug.ml.Isoniazid.for.2hrs.rep.1', '4802_H37Rv.ctrl.vs.relE1.overexpression.6.hr.rep.4', '4815_H37Rv.reaeration.for.12hrs.rep.1', '4815_H37Rv.reaeration.for.1hrs.rep.6', '4815_H37Rv.reaeration.for.4hrs.rep.6', '4815_H37Rv.reaeration.for.6hrs.rep.5', '4860_CDC1551.nadABC.null.nicotinamide.starvation.rep.2', '4928_Mtb.Erdman.strain.20.ppm.CO.rep.1', '4928_Mtb.Erdman.strain.20.ppm.CO.rep.2', '4928_Mtb.Erdman.strain.200.ppm.CO.rep.2', 'Maciag_JBacteriol2007_H37Rv.wild.type.vs.H37Rv.FurB.null.rep.4', 'Maciag_JBacteriol2007_H37Rv.wild.type.vs.H37Rv.FurB.null.rep.5', 'Milano_Tuberculosis2009_H37Rv.wild.type.vs.H37Rv.Bif1.mutant.rep.2', 'Provvedi_Microbiology2009_H37Rv.Control.vs.subinhibitory.conc..5.ug.ml..vancomycin.DS.rep.2', 'Provvedi_Microbiology2009_H37Rv.Control.vs.subinhibitory.conc..5.ug.ml..vancomycin.rep.2'] ;
var colLabel = ['RV0830', 'RV2377C', 'RV2963', 'RV2975C', 'RV3848'] ;

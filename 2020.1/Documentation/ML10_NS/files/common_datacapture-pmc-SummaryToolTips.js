NDSummary.OnToolTipsLoaded("File:common_datacapture.pmc",{306:"<div class=\"NDToolTip TClass LPMAClang\"><div class=\"TTSummary\">Contains logic for capturing data from the OCT system</div></div>",308:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype308\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call DataCapture.ReadCapturePosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">currentAngleReading</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Read the captured position for the given angle reading</div></div>",309:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype309\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call DataCapture.GetAnalogReadout(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PNamePrefix first\">&amp;</td><td class=\"PName last\">analogReading</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Query the current analog reading</div></div>",310:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype310\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call DataCapture.SetCapturePosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">index,</td></tr><tr><td class=\"PName first last\">value</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Set a value in the specified position of the data capture registers</div></div>",311:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype311\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call DataCapture.GetCapturePosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PName last\">index,</td></tr><tr><td class=\"PNamePrefix first\">&amp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Retrieve capture data from the specified index</div></div>",312:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype312\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call DataCapture.SetPositionCount(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">expectedCaptureCount</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Set up the storage structures to hold the specified amount of data, and clear them in preparation</div></div>",313:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype313\" class=\"NDPrototype NoParameterForm\">call DataCapture.StartDataCollection();</div><div class=\"TTSummary\">Start the process to collect LDD data</div></div>",314:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype314\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call DataCapture.StartDataCollectionAtIndex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">positionCaptureStartIndex</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Start the process to collect LDD data at the specified storage location</div></div>",315:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype315\" class=\"NDPrototype NoParameterForm\">call LDD.StopDataCollection();</div><div class=\"TTSummary\">Stop the data collection process</div></div>",316:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype316\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call DataCapture.SetAxis(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">axis</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Select the measurement axis</div></div>"});
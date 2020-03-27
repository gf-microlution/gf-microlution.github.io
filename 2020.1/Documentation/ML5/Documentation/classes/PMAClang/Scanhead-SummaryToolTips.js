NDSummary.OnToolTipsLoaded("PMAClangClass:Scanhead",{268:"<div class=\"NDToolTip TClass LPMAClang\"><div class=\"TTSummary\">Contains logic for interacting with the Arges Scanhead</div></div>",270:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype270\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call Scanhead.LoadJobAsync(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">stringJob,</td></tr><tr><td class=\"PName first last\">clearJobFirstFlag</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Start loading a job, and return control</div></div>",271:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype271\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call Scanhead.SelectJob(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">intJob</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Selects the job at the specified index</div></div>",272:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype272\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call Scanhead.SelectJobByName(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PName last\">stringName,</td></tr><tr><td class=\"PNamePrefix first\">&amp;</td><td class=\"PName last\">result</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Selects the job with the specified name Parameters: stringName - the name of the job</div></div>",202:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype202\" class=\"NDPrototype NoParameterForm\">call Scanhead.StartJob();</div><div class=\"TTSummary\">Starts the next enqueued job then returns control. Job execution can be stopped with Scanhead.AbortJob function.</div></div>",274:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype274\" class=\"NDPrototype NoParameterForm\">call Scanhead.ExecuteJob();</div><div class=\"TTSummary\">Starts the selected job on the scanhead, and wait for it to complete before continuing program execution</div></div>",275:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype275\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call Scanhead.SelectAndStartJob(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">intJob</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Select the specified job on the scanhead and start it.&nbsp; Program execution continues.&nbsp; Parameters: intJob - the index of the job to select</div></div>",276:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype276\" class=\"NDPrototype NoParameterForm\">call Scanhead.AbortJob()</div><div class=\"TTSummary\">Terminate the current job</div></div>",277:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype277\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call Scanhead.IsJobRunning(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PNamePrefix first\">&amp;</td><td class=\"PName last\">boolResult</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Query the status of the scanhead to see if a job is currently running</div></div>",278:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype278\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call Scanhead.SetGasFlow(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">mode</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Set the cover gas flow mode to normal or low</div></div>",279:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype279\" class=\"NDPrototype NoParameterForm\">call Scanhead.GasOn()</div><div class=\"TTSummary\">Command the cover gas to turn on</div></div>",280:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype280\" class=\"NDPrototype NoParameterForm\">call Scanhead.GasOff()</div><div class=\"TTSummary\">Command the cover gas to turn off</div></div>",281:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype281\" class=\"NDPrototype NoParameterForm\">call Scanhead.VacuumOn()</div><div class=\"TTSummary\">Command the vacuum to turn on</div></div>",282:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype282\" class=\"NDPrototype NoParameterForm\">call Scanhead.VacuumOff()</div><div class=\"TTSummary\">Command the vacuum to turn off</div></div>",283:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype283\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call Scanhead.LoadDistortionFile(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">__STRING__DistortionFile</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Attempt to load the given scanning distortion file</div></div>",284:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype284\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call Scanhead.SetNumericVariable(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">__STRING__VariablePath,</td></tr><tr><td class=\"PName first last\">__NUM__Value</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">write a numeric value to a scanhead variable</div></div>",285:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype285\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call Scanhead.SetTextVariable(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">__STRING__VariablePath,</td></tr><tr><td class=\"PName first last\">__STRING__Value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">write a text value to a scanhead variable</div></div>",286:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype286\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call Scanhead.GetNumericVariable(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PName last\">__STRING__VariablePath,</td></tr><tr><td class=\"PNamePrefix first\">&amp;</td><td class=\"PName last\">result</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Retrieve a numeric variable from the scanhead</div></div>",287:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype287\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call Scanhead.GetTextVariable(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PName last\">__STRING__VariablePath,</td></tr><tr><td class=\"PNamePrefix first\">&amp;</td><td class=\"PName last\">result</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Retrieve a text variable from the scanhead</div></div>",288:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype288\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call Scanhead.LoadJobDataCsvAsync(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">stringPathToDataCsv,</td></tr><tr><td class=\"PName first last\">stringPathToArlFile</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Start loading CSV-based and ARL data to a job, and return control immediately</div></div>",289:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype289\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call Scanhead.IsJobDataCsvLoading(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PNamePrefix first\">&amp;</td><td class=\"PName last\">boolIsJobLoading</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Test to see if a job is currently loading CSV and ARL data.&nbsp; For use with asynchronous subroutines</div></div>",290:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype290\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call Scanhead.SetDeviceManaged(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">deviceName</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Instruct the scanhead to treat the specified device as a managed device</div></div>",291:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype291\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call Scanhead.SetDeviceUnmanaged(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">deviceName</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Instruct the scanhead to treat the specified device as an unmanaged device</div></div>",204:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype204\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call Scanhead.ExecuteAndEnqueueJobList(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">jobListName</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Starts the job at the front of the queue and enqueues the desired joblist. The function returns when the job is finished and the next joblist is enqueued.</div></div>",205:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype205\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call Scanhead.ExecuteAndEnqueueJob(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">jobListName,</td></tr><tr><td class=\"PName first last\">jobName</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Starts the job at the front of the queue and enqueues the desired job. The function returns when the job is finished and the next job is enqueued.</div></div>",206:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype206\" class=\"NDPrototype NoParameterForm\">call Scanhead.ResetQueue();</div><div class=\"TTSummary\">Clears the execution queue and resets current errors.</div></div>",207:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype207\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call Scanhead.AddAndQueueJobList(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">filepath</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Adds and enqueues a joblist to the controller.</div></div>",208:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype208\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call Scanhead.AddAndQueueJob(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">jobName,</td></tr><tr><td class=\"PName first last\">filepath</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Adds and enqueues a job to the controller.</div></div>",209:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype209\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call Scanhead.AddJob(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">jobName,</td></tr><tr><td class=\"PName first last\">filepath</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Adds a job to the controller.</div></div>",210:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype210\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call Scanhead.AddJobList(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">filepath</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Adds a joblist to the controller.</div></div>",211:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype211\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call Scanhead.RemoveJob(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">jobListName,</td></tr><tr><td class=\"PName first last\">jobName</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Removes a job from the controller.</div></div>",212:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype212\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call Scanhead.RemoveJobList(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">jobListName</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Removes a joblist from the controller.</div></div>",213:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype213\" class=\"NDPrototype NoParameterForm\">call Scanhead.RemoveAllJobLists();</div><div class=\"TTSummary\">Removes all joblist from the controller.</div></div>",214:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype214\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call Scanhead.EnqueueJobList(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">jobListName</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Enqueues all the jobs in an added joblist into the execution queue.</div></div>",215:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype215\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call Scanhead.EnqueueJob(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">jobListName,</td></tr><tr><td class=\"PName first last\">jobName</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Enqueues a job in an added joblist into the execution queue.</div></div>",216:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype216\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call Scanhead.EnqueueJobListAsync(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">jobListName</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Starts enqueueing a joblist and returns execution to the program before the joblist is finished enqueueing</div></div>",217:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div class=\"TTSummary\">Starts enqueueing a job and returns execution to the program before the job is finished enqueueing</div></div>",218:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype218\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call Scanhead.IsJoblistQueueing(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PNamePrefix first\">&amp;</td><td class=\"PName last\">isQueueing</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Starts enqueueing a job and returns execution to the program before the job is finished enqueueing</div></div>",219:"<div class=\"NDToolTip Tsubsub LPMAClang\"><div id=\"NDPrototype219\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">call Scanhead.GetCurrentGasPressure(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PNamePrefix first\">&amp;</td><td class=\"PName last\">currentPressure</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Gets the current cover gas pressure in PSI</div></div>"});
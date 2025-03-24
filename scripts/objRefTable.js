const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.gamepad,
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Behaviors.Tween,
		C3.Behaviors.Timer,
		C3.Plugins.AJAX,
		C3.Plugins.Audio,
		C3.Plugins.Browser,
		C3.Plugins.Json,
		C3.Plugins.Spritefont2,
		C3.Behaviors.Fade,
		C3.Plugins.Text,
		C3.Behaviors.Platform,
		C3.Behaviors.LOS,
		C3.Plugins.TiledBg,
		C3.Plugins.Tilemap,
		C3.Behaviors.solid,
		C3.Behaviors.jumpthru,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetLayoutScale,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Plugins.Sprite.Acts.SetPosToObject,
		C3.Plugins.Sprite.Acts.AddChild,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.gamepad.Cnds.IsButtonDown,
		C3.Plugins.gamepad.Cnds.CompareAxis,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Behaviors.Platform.Cnds.IsEnabled,
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.Sprite.Exps.ImageWidth,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.Platform.Cnds.IsJumping,
		C3.Behaviors.Platform.Cnds.IsFalling,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Cnds.OnAnimFinished,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Behaviors.Platform.Cnds.OnLand,
		C3.Behaviors.Platform.Cnds.OnJump,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.TiledBg.Cnds.OnCreated,
		C3.Plugins.TiledBg.Acts.SetSize,
		C3.Behaviors.LOS.Acts.CastRay,
		C3.Plugins.TiledBg.Exps.X,
		C3.Plugins.TiledBg.Exps.Y,
		C3.Behaviors.LOS.Exps.Range,
		C3.Behaviors.LOS.Cnds.RayIntersected,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Behaviors.LOS.Exps.HitDistance,
		C3.Behaviors.Tween.Cnds.OnTweensFinished,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Exps.Count,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Sprite.Exps.Y,
		C3.Behaviors.Tween.Acts.TweenValue,
		C3.Behaviors.Tween.Cnds.IsPlaying,
		C3.Plugins.System.Exps.random,
		C3.Behaviors.Tween.Exps.Value,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Acts.ZMoveToObject,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Sprite.Exps.AnimationFrameCount,
		C3.Behaviors.Platform.Acts.SetVectorX,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Behaviors.Platform.Acts.SetEnabled,
		C3.Plugins.Sprite.Exps.ImagePointX,
		C3.Plugins.Sprite.Exps.ImagePointY,
		C3.Plugins.TiledBg.Acts.ZMoveToObject,
		C3.Plugins.TiledBg.Acts.SetWidth,
		C3.Plugins.TiledBg.Acts.SetTowardPosition,
		C3.Behaviors.LOS.Exps.HitX,
		C3.Behaviors.LOS.Exps.HitY,
		C3.Plugins.TiledBg.Exps.ImageHeight,
		C3.Plugins.TiledBg.Exps.Width,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.TiledBg.Acts.Destroy,
		C3.Behaviors.Platform.Acts.ResetDoubleJump,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.TiledBg.Acts.SetImageOffsetY,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Behaviors.Tween.Acts.StopTweens,
		C3.Plugins.System.Cnds.While,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.gamepad.Cnds.OnButtonDown,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.AJAX.Acts.RequestFile,
		C3.ScriptsInEvents.Storylayouteventsheet_Event1_Act6,
		C3.Plugins.AJAX.Cnds.OnComplete,
		C3.Plugins.Json.Acts.Parse,
		C3.Plugins.AJAX.Exps.LastData,
		C3.Plugins.Browser.Acts.ConsoleLog,
		C3.Plugins.Json.Exps.ToBeautifiedString,
		C3.ScriptsInEvents.Storylayouteventsheet2_Event1_Act6
	];
};
self.C3_JsPropNameTable = [
	{Gamepad: 0},
	{Keyboard: 0},
	{ScrollTo: 0},
	{Camera: 0},
	{Tween: 0},
	{Timer: 0},
	{GameManager: 0},
	{AJAX: 0},
	{Audio: 0},
	{Browser: 0},
	{DialogueJSONObject: 0},
	{Fade: 0},
	{TextFont: 0},
	{ctc_retro_textbox_: 0},
	{DialogueBox: 0},
	{PlayButton: 0},
	{StoryButton: 0},
	{DialogueText: 0},
	{SpeakerText: 0},
	{JumpingDust: 0},
	{LandingDust: 0},
	{Platform: 0},
	{LineOfSight: 0},
	{PlayerCollision: 0},
	{PlayerGraphics: 0},
	{HitEffect: 0},
	{WalkingDust: 0},
	{Rope: 0},
	{Trail: 0},
	{Background: 0},
	{Solid: 0},
	{Ground: 0},
	{Torch: 0},
	{Jumpthru: 0},
	{Bridge: 0},
	{Fire: 0},
	{Sprite: 0},
	{Table: 0},
	{TilemapSnowGlobe: 0},
	{Flash: 0},
	{Spike: 0},
	{TeleportPlatform: 0},
	{Charged: 0},
	{TeleportTrigger: 0},
	{Text: 0},
	{Sprite2: 0},
	{snowglobe: 0},
	{Sprite3: 0},
	{background_: 0},
	{background_2: 0},
	{background_3: 0},
	{background_4: 0},
	{background_5: 0},
	{Sprite4: 0},
	{Tilemap: 0},
	{CurrentLevel: 0},
	{GAMEPADDEADZONE: 0},
	{TARGETFRAMERATE: 0},
	{DEFAULTLAYOUTSCALE: 0},
	{InputLeft: 0},
	{InputRight: 0},
	{InputUp: 0},
	{InputDown: 0},
	{HorizontalAxis: 0},
	{VerticalAxis: 0},
	{AxisAngle: 0},
	{InputConfirm: 0},
	{InputCancel: 0},
	{canHook: 0},
	{CAMERASPEED: 0},
	{CAMERAOFFSETX: 0},
	{CAMERAOFFSETY: 0},
	{Intensity: 0},
	{Duration: 0},
	{TimeDivider: 0},
	{RopeLimit: 0},
	{MenuLength: 0},
	{MenuSelection: 0},
	{PrevInputUp: 0},
	{PrevInputDown: 0},
	{CurrentDialogue: 0},
	{CurrentDialogueIndex: 0},
	{CurrentDialogue2: 0},
	{CurrentDialogueIndex2: 0}
];

self.InstanceType = {
	Gamepad: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {},
	Camera: class extends self.ISpriteInstance {},
	GameManager: class extends self.ISpriteInstance {},
	AJAX: class extends self.IInstance {},
	Audio: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	DialogueJSONObject: class extends self.IJSONInstance {},
	TextFont: class extends self.ISpriteFontInstance {},
	ctc_retro_textbox_: class extends self.ISpriteInstance {},
	DialogueBox: class extends self.ISpriteInstance {},
	PlayButton: class extends self.ISpriteInstance {},
	StoryButton: class extends self.ISpriteInstance {},
	DialogueText: class extends self.ITextInstance {},
	SpeakerText: class extends self.ITextInstance {},
	JumpingDust: class extends self.ISpriteInstance {},
	LandingDust: class extends self.ISpriteInstance {},
	PlayerCollision: class extends self.ISpriteInstance {},
	PlayerGraphics: class extends self.ISpriteInstance {},
	HitEffect: class extends self.ISpriteInstance {},
	WalkingDust: class extends self.ISpriteInstance {},
	Rope: class extends self.ITiledBackgroundInstance {},
	Trail: class extends self.ISpriteInstance {},
	Background: class extends self.ITiledBackgroundInstance {},
	Ground: class extends self.ITilemapInstance {},
	Torch: class extends self.ISpriteInstance {},
	Bridge: class extends self.ISpriteInstance {},
	Fire: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Table: class extends self.ISpriteInstance {},
	TilemapSnowGlobe: class extends self.ITilemapInstance {},
	Flash: class extends self.ITiledBackgroundInstance {},
	Spike: class extends self.ISpriteInstance {},
	TeleportPlatform: class extends self.ISpriteInstance {},
	TeleportTrigger: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	snowglobe: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	background_: class extends self.ISpriteInstance {},
	background_2: class extends self.ISpriteInstance {},
	background_3: class extends self.ISpriteInstance {},
	background_4: class extends self.ISpriteInstance {},
	background_5: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Tilemap: class extends self.ITilemapInstance {}
}